import React, { Component } from "react";
import logo from "./../images/giraffe-logo.png";
import banner from "./../images/banner.jpg";
import ReactGA from "react-ga";
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
          <p className="arrow">▽</p>
        </div>
      </div>
      <div>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "700px",
            width: "100%",
            cursor: "default",
          }}
          center={[-69.000119, 47.341503]}
          zoom={[6]}
        >
          <Marker coordinates={[-66.542361, 48.07969]} anchor="bottom">
            <img
              className="we-are-here"
              src={
                "https://static.wixstatic.com/media/9447b0_1f2aa0b7d11c47468126d5163821ee91~mv2_d_2708_4097_s_4_2.png/v1/fill/w_600,h_908,al_c,q_90,usm_0.66_1.00_0.01/9447b0_1f2aa0b7d11c47468126d5163821ee91~mv2_d_2708_4097_s_4_2.webp"
              }
            />
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
