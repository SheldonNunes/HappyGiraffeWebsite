import React, { Component } from "react";

import Blog from "./pages/Blog";
import Home from "./pages/Home";
import TvShowRater from "./pages/TvShowRater";
import ReactGA from "react-ga";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    ReactGA.initialize("UA-126567500-1");
  }
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            {/* <div>
              <nav>
                  <ul className="navlist">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/tv">TV</NavLink></li>
                  </ul>
              </nav>
              <h1 className='about__title'>Happy Giraffe</h1>
            </div> */}
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/blog" component={Blog} />
              <Route path="/tv" component={TvShowRater} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
