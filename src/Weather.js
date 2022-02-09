import axios from "axios";
import React, { useState } from "react";

import sun from "./images/sun.png";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      minTemperature: response.data.main.temp_min,
      maxTemperature: response.data.main.temp_max,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      dateTime: "Thursday | 23:51",
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
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
              <button type="submit" className="primary-button">
                Search
              </button>
            </div>
            <div className="col-3">
              <button type="submit" className="secondary-button">
                Current Location
              </button>
            </div>
          </div>
        </form>
        <div className="card card-today">
          <div className="card-body">
            <div className="row">
              <div className="col-6 col-today" id="city-element">
                {weatherData.city}
              </div>
              <div className="col-6 col-today" id="current-time">
                {weatherData.dateTime}
              </div>
              <div className="col-6">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="img-today"
                  id="today-weather-icon"
                />
              </div>
              <span className="col today-temperature">
                <span id="today-temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="temperature-units">°C</span>
                <span>
                  <ul className="today-weather-detail">
                    <li id="temperature-interval">
                      {Math.round(weatherData.minTemperature)}ºC |{" "}
                      {Math.round(weatherData.maxTemperature)}ºC
                    </li>
                    <li id="weather-description">{weatherData.description}</li>
                    <li id="wind-speed">
                      Wind speed: {weatherData.windSpeed} km/h
                    </li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "73a00877081bd43422bdee0f3022beb5";
    let units = "metric";
    let searchedCity = "Porto";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;

    axios.get(apiURL).then(handleResponse);

    return <h2>Loading</h2>;
  }
}
