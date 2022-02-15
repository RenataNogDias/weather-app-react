import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="card card-today">
        <div className="card-body">
          <div className="row blue-card">
            <div className="col-md-6 col-today">{props.data.city}</div>
            <div className="col-md-6 col-today">
              <FormattedDate date={props.data.date} />
            </div>
            <div className="col-md weather-icon-today">
              <WeatherIcon iconCode={props.data.icon} size={100} />
            </div>
            <span className="col-md today-temperature">
              {Math.round(props.data.temperature)}°C
              <span>
                <ul className="today-weather-detail">
                  <li className="d-none d-sm-block">
                    {Math.round(props.data.minTemperature)} ºC |{" "}
                    {Math.round(props.data.maxTemperature)} ºC
                  </li>
                  <li className="d-none d-md-block" id="weather-description">
                    {props.data.description}
                  </li>
                  <li className="d-none d-md-block">
                    Wind speed: {props.data.windSpeed} km/h
                  </li>
                </ul>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
