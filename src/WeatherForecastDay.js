import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}º`;
  }

  function minTemperature() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return weekdays[day];
  }

  return (
    <div>
      <div> {day()} </div>
      <WeatherIcon iconCode={props.data.weather[0].icon} size={55} />
      <span className="forecast-min-temperature">
        {minTemperature()}
      </span> |{" "}
      <span className="forecast-max-temperature">{maxTemperature()}</span>{" "}
    </div>
  );
}
