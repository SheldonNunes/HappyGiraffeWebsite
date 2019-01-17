import React, { Component } from 'react';

export default function Show(props) {
      const { content } = props;

      return (
        <div className="show">
            <h3 className="post__name"><a>{content.name}</a></h3>
        </div>
      );
  }