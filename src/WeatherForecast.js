import React from "react";

import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>Tuesday</div>
          <WeatherIcon iconCode="01d" size={55} />
          <span className="forecast-min-temperature">10ºC</span> |{" "}
          <span className="forecast-max-temperature">19ºC</span>{" "}
        </div>
      </div>
    </div>
  );
}
