import React, { Component } from 'react';
import logo from './../images/giraffe-logo.png';

export default function Home(props) {
      return (
        <div className="home">
            <div>
                <img src={logo} className='logo-center' alt="Happy Giraffe Logo" />
            </div>
            <div className='about__description'>
                <h2>Welcome to Happy Giraffe</h2>
                <p>I am a software developer with keen interest on all things tech</p>
            </div>
        </div>
      );
  }