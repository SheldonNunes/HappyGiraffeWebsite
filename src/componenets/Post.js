import React, { Component } from 'react';

export default function Post(props) {
      const { content } = props;
      let firstPTag = content.description.indexOf('<p>')
      let firstClosingPTag = content.description.indexOf('</p>')
      let description = content.description.substring(firstPTag+3, firstClosingPTag);

      var thumbnailStyle = {
        height: '100%',
        backgroundImage: `url(${content.thumbnail})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        overflow: 'hidden',
      };

      return (
        <div className="post">
          <div className="post__thumbnail" style={thumbnailStyle}/>
          <div className="post__details">
            <h3 className="post__title"><a href={content.link}>{content.title}</a></h3>
            <p className="post__date">{content.pubDate}</p>
            <p className="post__description">{description}</p>
          </div>
        </div>
      );
  }