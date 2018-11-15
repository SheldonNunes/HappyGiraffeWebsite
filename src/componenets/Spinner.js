import React, { Component } from 'react';
import spinner from './../images/LoadingSpinner.svg';


export default function Spinner(props) {
      return (
        <div>
          <img src={spinner} className='spinner' />
        </div>
      );
  }