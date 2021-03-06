import React, { Component } from 'react';
import axios from 'axios';
import Post from './../componenets/Post'
import ReactGA from 'react-ga';
import Spinner from './../componenets/Spinner';

export default class Blog extends React.Component {
    state = {
      posts: [],
      loading: false
    }

    componentDidMount() {
      var that = this;
      this.setState({ loading: true })
      axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fhappy-giraffe`)
      .then(response => {
          return response.data.items
      })
      .then(posts => {
        that.setState({ posts })
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function() {
        that.setState({ loading: false })
      });
    }

    render() {
      ReactGA.pageview('/blog');
      return (
        <div className="blog">
          <h2>Blog</h2>
            <div className="posts">
            { this.state.loading ? <Spinner /> : null }
              { this.state.posts.map((post) => 
                <Post key={post.title} content={post} />)
              }
            </div>
        </div>
      );
    }
  }