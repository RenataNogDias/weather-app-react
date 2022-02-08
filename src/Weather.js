import React from "react";

import sun from "./images/sun.png";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form id="search-city-form">
        <div className="row">
          <div className="mb-3 col-6">
            <input
              type="text"
              placeholder="Search city"
              className="form-control search-box-city"
              id="search-city-input"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <button type="submit" className="search-button">
              Search
            </button>
          </div>
          <div className="col-3">
            <button type="submit" id="current-location-button">
              Current Location
            </button>
          </div>
        </div>
      </form>
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
    </div>
  );
}
