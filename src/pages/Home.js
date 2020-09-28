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

import placeholder from "./../images/placeholder_animal.svg";

import buffalo from "./../images/animals/buffalo.png";
import deer from "./../images/animals/deer.png";
import fox from "./../images/animals/fox.png";
import gannett from "./../images/animals/gannett.png";
import moose from "./../images/animals/moose.svg";
import seal from "./../images/animals/seal.png";
import squirrel from "./../images/animals/squirrel.png";
import whale from "./../images/animals/whale.png";
import wolf from "./../images/animals/wolf.png";

import travelled from "./../resources/travelled.geojson";
import locations from "./../resources/locations.geojson";

const Map = ReactMapboxGl({
  interactive: false,
  // scrollZoom: false,
  accessToken:
    "pk.eyJ1Ijoic2hlbGRvbm51bmVzIiwiYSI6ImNrZHhqd3k1bDEyZXkycm9nOWdjM3hvNHAifQ.U1ml7ludEhsFESNWh062Qg",
});
const distanceTravelled = 246110 - 238904;
const currentLocation = [-73.572649, 45.515425];
const currentDays = Math.round(
  (Date.now() - Date.parse("01 Aug 2020 00:00:00 EST")) / (1000 * 60 * 60 * 24)
);

const totalDays = Math.round(
  (Date.parse("27 Sep 2020 00:00:00 EST") -
    Date.parse("01 Aug 2020 00:00:00 EST")) /
    (1000 * 60 * 60 * 24)
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
          <h3>See the journey</h3>
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
            center={[-67.16613, 47.50537]}
            zoom={[5]}
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
            <CircularProgressbar value={100} text={`57/57`} />
          </div>
        </div>
        <div className="full-width">
          <h4>Total Tim Horton's visited</h4>
          <div className="stat-container">
            <p className="stat">34</p>
          </div>
        </div>
      </div>
      <div className="map-sidebar">
        <div className="full-width">
          <img className="we-are-here" src={film_roll} />
          <p>Alpha One - FX-Quartz</p>
          <p>36/36</p>
        </div>
        <div className="full-width">
          <img className="we-are-here" src={film_roll} />
          <p>Alpha Two - FX-Quartz</p>
          <p>36/36</p>
        </div>
        <div className="full-width">
          <img className="we-are-here" src={sony_a7} />
          <p>Sony A7</p>
          <p>985 Photos</p>
        </div>
      </div>
      <div className="animal-sidebar">
        <div className="full-width animal">
          <img className="animal_icon" src={whale} />
          <p>Whales</p>
          <p>5</p>
        </div>
        <div className="full-width animal">
          <img className="animal_icon" src={deer} />
          <p>Caribous</p>
          <p>4</p>
        </div>
        <div className="full-width animal">
          <img className="animal_icon" src={moose} />
          <p>Moose</p>
          <p>2</p>
        </div>
        <div className="full-width animal">
          <img className="animal_icon" src={buffalo} />
          <p>Bison</p>
          <p>4</p>
        </div>
        <div className="full-width animal">
          <img className="animal_icon" src={seal} />
          <p>Seals</p>
          <p>17</p>
        </div>
        <div className="full-width animal">
          <img className="animal_icon" src={wolf} />
          <p>Wolves</p>
          <p>4</p>
        </div>
        <div className="full-width animal">
          <img className="animal_icon" src={gannett} />
          <p>Gannets</p>
          <p>999</p>
        </div>
        <div className="full-width animal">
          <img className="animal_icon" src={fox} />
          <p>Foxes</p>
          <p>4</p>
        </div>
        <div className="full-width animal">
          <img className="animal_icon" src={squirrel} />
          <p>Squirrels</p>
          <p>83</p>
        </div>
      </div>
      <h2>Timeline</h2>
      <Timeline />
    </div>
  );
}
