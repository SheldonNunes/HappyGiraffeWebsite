import React, { Component } from 'react';

export default function Post(props) {
      const { content } = props;
      let firstPTag = content.description.indexOf('<p>')
      let firstClosingPTag = content.description.indexOf('</p>')
      let description = content.description.substring(firstPTag+3, firstClosingPTag);
      return (
        <div className="post">
          <img src={content.thumbnail}></img>
          <h2><a href={content.link}>{content.title}</a></h2>
          <p>{description}</p>
        </div>
      );
  }