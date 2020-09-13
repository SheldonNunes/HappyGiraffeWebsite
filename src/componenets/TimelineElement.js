import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function TimelineElement(props) {
  const timeline_location = props.timeline_location;
  // const image = require(`./../images/${timeline_location.image}`);

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(137 154 71)", color: "#222" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(137 154 71)" }}
      // date={timeline_location.date}
      iconStyle={{ background: "rgb(137 154 71)", color: "#fff" }}
      icon={<span className="timeline-date">{timeline_location.date}</span>}
    >
      <img
        className="timeline-image"
        src={`timeline/${timeline_location.image}`}
      ></img>
      <h3 className="vertical-timeline-element-title">
        {timeline_location.title}
      </h3>
      <p>
        <i>{timeline_location.location}</i>
      </p>
      <p>{timeline_location.description}</p>
    </VerticalTimelineElement>
  );
}
