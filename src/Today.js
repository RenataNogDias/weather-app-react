import React from "react";
import "./Today.css";
import sun from "./images/sun.png";

export default function Today() {
  return (
    <div className="card card-today">
      <div className="card-body">
        <div className="row">
          <div className="col-6 col-today" id="city-element">
            Porto
          </div>
          <div className="col-6 col-today" id="current-time">
            Thursday | 23:51
          </div>
          <div className="col-6">
            <img
              src={sun}
              alt=""
              className="img-today"
              id="today-weather-icon"
            />
          </div>
          <span className="col today-temperature">
            <span id="today-temperature">8</span>
            <span className="temperature-units">°C</span>
            <span>
              <ul className="today-weather-detail">
                <li id="temperature-interval">5ºC | 14ºC</li>
                <li id="weather-description">Clear sky</li>
                <li id="wind-speed">Wind speed: 13 km/h</li>
              </ul>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
