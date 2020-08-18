import React, { Component, useRef } from "react";
import logo from "./../images/giraffe-logo.png";
import banner from "./../images/banner.jpg";
import ReactGA from "react-ga";
import here from "./../images/we-are-here.png";
import ReactMapboxGl, {
  Layer,
  Feature,
  Marker,
  GeoJSONLayer,
} from "react-mapbox-gl";
import features from "./../resources/features.geojson";

const Map = ReactMapboxGl({
  interactive: false,
  accessToken:
    "pk.eyJ1Ijoic2hlbGRvbm51bmVzIiwiYSI6ImNrZHhqd3k1bDEyZXkycm9nOWdjM3hvNHAifQ.U1ml7ludEhsFESNWh062Qg",
});

export default function Home(props) {
  const ref = React.createRef();

  const handleClick = () =>
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  ReactGA.pageview("/t");
  return (
    <div className="home">
      <div className="banner-container">
        <div className="banner-top">
          <img src={logo} className="banner-logo" alt="Happy Giraffe Logo" />
          <h3 className="banner-text">Our Vanlife Adventure</h3>
        </div>
        <img src={banner} className="banner" />
        <div className="banner-footer">
          <p>See where we are now</p>
          <p onClick={handleClick} className="arrow">
            ▽
          </p>
        </div>
      </div>
      <div ref={ref}>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "100vh",
            width: "100%",
            cursor: "default",
          }}
          center={[-66.1007, 48.0982]}
          zoom={[6]}
        >
          <Marker coordinates={[-66.1007, 48.0982]} anchor="bottom">
            <img className="we-are-here" src={here} />
          </Marker>
          <GeoJSONLayer
            data={features}
            lineLayout={{}}
            circlePaint={{
              "circle-radius": 6,
            }}
            linePaint={{
              "line-width": 6,
            }}
            symbolLayout={{
              "text-field": "{place}",
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 0.6],
              "text-anchor": "top",
            }}
          />
        </Map>
        ;
      </div>
    </div>
  );
}
