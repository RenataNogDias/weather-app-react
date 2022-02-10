import React from "react";

export default function FormattedDate0(props) {
  let weekday = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {days[weekday]} | {hours}:{minutes}
    </div>
  );
}
