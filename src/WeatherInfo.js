import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <div className="card card-today">
        <div className="card-body">
          <div className="row">
            <div className="col-6 col-today" id="city-element">
              {props.data.city}
            </div>
            <div className="col-6 col-today" id="current-time">
              <FormattedDate date={props.data.dateTime} />
            </div>
            <div className="col-6">
              <WeatherIcon iconCode={props.data.icon} />
            </div>
            <span className="col today-temperature">
              <span id="today-temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="temperature-units">°C</span>
              <span>
                <ul className="today-weather-detail">
                  <li id="temperature-interval">
                    {Math.round(props.data.minTemperature)}ºC |{" "}
                    {Math.round(props.data.maxTemperature)}ºC
                  </li>
                  <li id="weather-description">{props.data.description}</li>
                  <li id="wind-speed">
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
