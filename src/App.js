import React, { Component } from 'react';
import logo from './images/giraffe-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1 className='about__title'>Happy Giraffe</h1>
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
}

export default App;
