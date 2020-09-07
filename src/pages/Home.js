import React from "react";
import logo from "./../images/giraffe-logo.png";
import film_roll from "./../images/film-roll.png";
import sony_a7 from "./../images/sony-a7ii.png";
import banner from "./../images/banner.jpg";
import ReactGA from "react-ga";
import here from "./../images/van-gif2.gif";
import Timeline from "./../componenets/Timeline";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./../ProgressBar.css";
import ReactMapboxGl, { Marker, GeoJSONLayer } from "react-mapbox-gl";

import travelled from "./../resources/travelled.geojson";
import locations from "./../resources/locations.geojson";

const Map = ReactMapboxGl({
  interactive: false,
  // scrollZoom: false,
  accessToken:
    "pk.eyJ1Ijoic2hlbGRvbm51bmVzIiwiYSI6ImNrZHhqd3k1bDEyZXkycm9nOWdjM3hvNHAifQ.U1ml7ludEhsFESNWh062Qg",
});
const distanceTravelled = 243649 - 238904;
const currentLocation = [-66.16613, 49.20537];
const currentDays = Math.round(
  (Date.now() - Date.parse("01 Aug 2020 00:00:00 EST")) / (1000 * 60 * 60 * 24)
);

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
          <h1 className="banner-text">Our Vanlife Adventure</h1>
        </div>
        <img src={banner} className="banner" />
        <div className="banner-footer">
          <h3>See where we are now</h3>
          <p onClick={handleClick} className="arrow">
            ▽
          </p>
        </div>
      </div>
      <div className="map-section" ref={ref}>
        <div className="map-container">
          <Map
            style="mapbox://styles/sheldonnunes/cke4f32ub037k18pdnv70maw9"
            containerStyle={{
              height: "100%",
              width: "100%",
              cursor: "default",
            }}
            center={[-66.16613, 47.50537]}
            zoom={[6]}
          >
            <Marker coordinates={currentLocation} anchor="center">
              <img className="we-are-here" src={here} />
            </Marker>
            <GeoJSONLayer
              data={travelled}
              lineLayout={{}}
              linePaint={{
                "line-width": 4,
                "line-color": "#899a47",
              }}
              symbolLayout={{
                "text-field": "{place}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top",
              }}
            />
            <GeoJSONLayer
              data={locations}
              lineLayout={{}}
              circlePaint={{
                "circle-radius": 6,
                "circle-color": "#697538",
              }}
              linePaint={{
                "line-width": 2,
              }}
              symbolLayout={{
                "text-field": "{place}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top",
              }}
              circleOnClick={(circleInfo) => {
                // setSelectedLocation(circleInfo.features[0]);
              }}
            />
          </Map>
        </div>
      </div>
      <h2>Statistics</h2>
      <div className="map-sidebar">
        <div className="full-width">
          <h4>Odometer (kms)</h4>
          <div className="stat-container">
            <p className="stat">{distanceTravelled}</p>
          </div>
        </div>
        <div className="full-width">
          <h4>Total Nights</h4>
          <div className="statistic-graph">
            <CircularProgressbar
              value={(currentDays / 60) * 100}
              text={`${currentDays}/${60}`}
            />
          </div>
        </div>
        <div className="full-width">
          <h4>Total Tim Horton's visited</h4>
          <div className="stat-container">
            <p className="stat">22</p>
          </div>
        </div>
      </div>
      <div className="map-sidebar">
        <div className="full-width">
          <img className="we-are-here" src={film_roll} />
          <p>Alpha One - FX-Quartz</p>
          <p>36/36 (Needs Developing)</p>
        </div>
        <div className="full-width">
          <img className="we-are-here" src={film_roll} />
          <p>Alpha Two - FX-Quartz</p>
          <p>28/36 Photos</p>
        </div>
        <div className="full-width">
          <img className="we-are-here" src={sony_a7} />
          <p>Sony A7</p>
          <p>730 Photos</p>
        </div>
      </div>
      <h2>Timeline</h2>
      <Timeline />
    </div>
  );
}
