import React from "react";
import "react-circular-progressbar/dist/styles.css";
import ReactGA from "react-ga";
import ReactMapboxGl from "react-mapbox-gl";
import Timeline from "./../componenets/Timeline";
import "./../ProgressBar.css";




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
   <div>
      <h2>Timeline</h2>
      <Timeline />
    </div>
  );
}
