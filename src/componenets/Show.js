import React, { Component } from 'react';

export default function Show(props) {
      const { content, onClick } = props;

      return (
        <div className="show" >
            <img onClick={() => onClick(content)} className="tvImage" src={'https://image.tmdb.org/t/p/w200/' + content.poster_path}/>
            <p onClick={() => onClick(content)}>{content.name}</p>
        </div>)
  }