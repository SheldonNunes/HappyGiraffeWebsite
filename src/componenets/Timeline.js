import React, { Component, useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import logo from "./../images/giraffe-logo.png";
import timeline_locations from "./../resources/timeline-locations.json";
import TimelineElement from "./TimelineElement";

export default function Timeline(props) {
  const [locationsData, setLocationsData] = useState([]);

  return (
    <VerticalTimeline>
      <div className="stormtroopers">
        <img style={{  width: "500px",
  height: "400px"}} src="https://thumbs.dreamstime.com/z/flat-icon-calendar-th-august-isolated-gray-background-vector-illustration-calendar-th-august-135284454.jpg"/>
      </div>
      {timeline_locations.locations
        .filter((timeline_location) => !timeline_location.disabled)
        .map((timeline_location) => {
          return (
            <TimelineElement
              key={timeline_location.id}
              timeline_location={timeline_location}
            />
          );
        })}
    </VerticalTimeline>
  );
}
