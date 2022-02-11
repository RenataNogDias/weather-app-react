import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="card card-today">
        <div className="card-body">
          <div className="row">
            <div className="col-6 col-today">{props.data.city}</div>
            <div className="col-6 col-today">
              <FormattedDate date={props.data.date} />
            </div>
            <div className="col-6">
              <WeatherIcon iconCode={props.data.icon} />
            </div>
            <span className="col today-temperature">
              <WeatherTemperature celsiusTemperature={props.data.temperature} />

              <span>
                <ul className="today-weather-detail">
                  <li>
                    {Math.round(props.data.minTemperature)} ºC |{" "}
                    {Math.round(props.data.maxTemperature)} ºC
                  </li>
                  <li id="weather-description">{props.data.description}</li>
                  <li>Wind speed: {props.data.windSpeed} km/h</li>
                </ul>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
