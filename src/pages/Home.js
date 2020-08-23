import React, { Component, useRef, useState, useEffect } from "react";
import logo from "./../images/giraffe-logo.png";
import banner from "./../images/banner.jpg";
import ReactGA from "react-ga";
import here from "./../images/van-gif2.gif";
import Odometer from "react-odometerjs";
import Timeline from "./../componenets/Timeline";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./../Odometer.css";
import ReactMapboxGl, {
  Layer,
  Feature,
  Marker,
  GeoJSONLayer,
  ZoomControl,
  Popup,
} from "react-mapbox-gl";

import travelled from "./../resources/travelled.geojson";
import locations from "./../resources/locations.geojson";

const Map = ReactMapboxGl({
  interactive: false,
  // scrollZoom: false,
  accessToken:
    "pk.eyJ1Ijoic2hlbGRvbm51bmVzIiwiYSI6ImNrZHhqd3k1bDEyZXkycm9nOWdjM3hvNHAifQ.U1ml7ludEhsFESNWh062Qg",
});
const distanceTravelled = 241354 - 238904;
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

  const [locationsData, setLocationsData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({
    geometry: {
      coordinates: [0, 0],
    },
    properties: {},
  });

  async function fetchLocations() {
    const res = await fetch(window.location.origin + locationUrl);
    const data = await res.json();
    setLocationsData(data);
  }

  const locationUrl = locations;
  useEffect(() => {
    fetchLocations();
  }, []);

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
      <div className="map-container" ref={ref}>
        <Map
          style="mapbox://styles/sheldonnunes/cke4f32ub037k18pdnv70maw9"
          containerStyle={{
            height: "100vh",
            width: "100%",
            cursor: "default",
          }}
          center={[-61.771633, 47.413498]}
          zoom={[6]}
        >
          <Marker coordinates={[-61.771633, 47.413498]} anchor="center">
            <img className="we-are-here" src={here} />
          </Marker>
          <GeoJSONLayer
            data={travelled}
            lineLayout={{}}
            linePaint={{
              "line-width": 2,
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
              setSelectedLocation(circleInfo.features[0]);
            }}
          />
          {/* <ZoomControl position="top-left" /> */}
        </Map>
        <div className="map-sidebar">
          <h2>Some Statistics</h2>
          <h4>Odometer (kms)</h4>
          <div className="odometer--container">
            <Odometer theme="car" value={distanceTravelled} />
          </div>
          <h4>Total Nights</h4>
          <div className="statistic-graph">
            <CircularProgressbar
              value={(currentDays / 60) * 100}
              text={`${currentDays}/${60}`}
            />
          </div>
          <h4>Total Tim Horton's visited</h4>
          <p>18</p>
        </div>
      </div>
      <h2>Timeline</h2>
      <Timeline />
    </div>
  );
}
