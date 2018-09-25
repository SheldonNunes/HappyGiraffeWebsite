import React, { Component } from 'react';

import Blog from './pages/Blog';
import Home from './pages/Home';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <HashRouter>
          <div>
            <div>
              <nav>
                  <ul className="navlist">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                  </ul>
              </nav>
              <h1 className='about__title'>Happy Giraffe</h1>
            </div>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/blog" component={Blog}/>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
