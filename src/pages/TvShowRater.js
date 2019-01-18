import React, { Component } from 'react';
import axios from 'axios';
import Show from './../componenets/Show'
import ReactGA from 'react-ga';
import Spinner from './../componenets/Spinner';
import {Line} from 'react-chartjs-2';

export default class TvShowRater extends React.Component {

    constructor() {
        super();
        this.state = {
            show: null,
            loading: false,
            search: '',
            searchResults: [],
            searched: false,
            selectedShow: null,
            searchAttempted: false,
            chart: {
              labels: ["Episode 1", "Episode 2", "Episode 3", "Episode 4", "Episode 5", "Episode 6", "July"],
              datasets: [{
              label: "Season 1",
              borderColor: 'rgb(255, 99, 132)',
              data: [],
              fill: false,
              pointRadius: 10,
              pointHoverRadius: 15,
              pointBackgroundColor:'rgb(255, 99, 132)',
            },
              {
                label: "Season 2",
                borderColor: 'rgb(0, 99, 132)',
                data: [],
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                pointBackgroundColor:'rgb(0, 99, 132)',
              },
            ]
           },
           options: {
            scales: {
              xAxes: [{
                ticks: {
                  display: false
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  max: 10
                }
              }]
            }
           }
          }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showSelected = this.showSelected.bind(this);
    }

    handleChange(event) {
        this.setState({search: event.target.value});
      }
    
    handleSubmit(event) {
        this.setState({selectedShow: null})
        this.setState({loading: true})
        let that = this;
        event.preventDefault();
        let uri = encodeURI(`https://4nik31yl2m.execute-api.us-east-2.amazonaws.com/default/search-tv?query='` + this.state.search + `'`)
        axios.get(uri)
        .then(response => {
            return response.data.results
        })
        .then(searchResults => {
          that.setState({searchAttempted: true})
          that.setState({ searchResults })
          that.setState({loading: false})
        })
    }

    dynamicColors = () => {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      return "rgb(" + r + "," + g + "," + b + ")";
   };

    showSelected(show) {
      this.setState({loading: true})
      let that = this;
      this.setState({ selectedShow: show })
      let uri = encodeURI(`https://29f5e073z2.execute-api.us-east-2.amazonaws.com/default/get-tv-episodes?id=` + show.id)
      axios.get(uri)
        .then(response => {
            return response.data
        })
        .then(seasons => {
          let chart = {
            labels: [],
            datasets: [],
          }
          let totalEpisodesSoFar = 0
          seasons.forEach(function(seasonJSON) {
            let seasonColor = that.dynamicColors();
            let season = JSON.parse(seasonJSON);
            let dataset = {
              label: "Season " + season.season_number,
              data: new Array(totalEpisodesSoFar).fill(null),
              fill: false,
              pointRadius: 7,
              pointHoverRadius: 10,
              pointBackgroundColor: seasonColor,
              borderColor: seasonColor
            }
            season.episodes.forEach(function(episode) {
              chart.labels.push("Episode " + episode.episode_number + ": " + episode.name);
              dataset.data.push(episode.vote_average)
              totalEpisodesSoFar += 1;
            });

            chart.datasets.push(dataset);
          });
          that.setState({ chart })
          that.setState({loading: false})
        })
    }

    render() {
      ReactGA.pageview('/tv');
      return (
        <div className="tv">
          <h2>TV Show Rater</h2>
          <p>Get graph ratings for your favourite tv shows.</p>
          <p>Note this does not work for shows exceeding 45 seasons</p>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.search} name="search" onChange={this.handleChange} />
            <input type="submit" value="Submit" disabled={this.state.search === '' || this.state.loading} />
          </form>
          { this.state.loading ? <Spinner /> : null }
            { !this.state.selectedShow ? <div className="searchResults">
              { !this.state.loading && this.state.searchResults.length === 0 && this.state.searchAttempted ? <p>No Results</p> : null }
              { this.state.searchResults.map((result) => 
                  <Show key={result.id} content={result} onClick={this.showSelected}/>
                )
              }
            </div> : null }
            <div>
              { !this.state.loading && this.state.selectedShow ? <Line data={this.state.chart} options={this.state.options}/> : null }
            </div>
        </div>
      );
    }
  }