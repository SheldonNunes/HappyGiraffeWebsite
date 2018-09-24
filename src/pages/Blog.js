import React, { Component } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';
import Post from './../componenets/Post'

export default class Blog extends React.Component {
    state = {
      posts: []
    }

    componentDidMount() {
      axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fhappy-giraffe`)
      .then(response => {
          return response.data.items
      })
      .then(posts => {
          this.setState({ posts })
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    render() {
      return (
        <div className="blog">
          <div className="game-board">
            { this.state.posts.map((post) => 
              <Post key={post.title} content={post} />)
            }
          </div>
        </div>
      );
    }
  }