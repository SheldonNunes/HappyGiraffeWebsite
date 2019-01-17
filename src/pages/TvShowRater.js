import React, { Component } from 'react';
import axios from 'axios';
import Post from './../componenets/Post'
import ReactGA from 'react-ga';
import Spinner from './../componenets/Spinner';

export default class TvShowRater extends React.Component {

    constructor() {
        super();
        this.state = {
            show: null,
            loading: false,
            search: ''
          }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({search: event.target.value});
      }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.search);
        event.preventDefault();
    }

    render() {
      ReactGA.pageview('/tv');
      return (
        <div className="tv">
          <h2>TV Show Rater</h2>
          <p>Get graph ratings for your favourite tv shows.</p>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.search} name="search" onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
            <div className="posts">
            </div>
        </div>
      );
    }
  }