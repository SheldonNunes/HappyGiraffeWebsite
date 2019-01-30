import React, { Component } from 'react';

export default function Show(props) {
      const { content, onClick } = props;

      return (
        <div className="show" >
            <img onClick={() => onClick(content)} className="tvImage" src={content.Poster}/>
            <p onClick={() => onClick(content)}>{content.Title}</p>
        </div>)
  }