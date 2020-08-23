import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function TimelineElement(props) {
  const timeline_location = props.timeline_location;
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#222" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={timeline_location.date}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      //   icon={<img src={logo}></img>}
    >
      <img className="timeline-image" src={timeline_location.image}></img>
      <h3 className="vertical-timeline-element-title">
        {timeline_location.title}
      </h3>
      <p>{timeline_location.description}</p>
    </VerticalTimelineElement>
  );
}
