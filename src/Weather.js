import axios from "axios";
import React, { useState } from "react";

import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "73a00877081bd43422bdee0f3022beb5";
    let units = "metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      minTemperature: response.data.main.temp_min,
      maxTemperature: response.data.main.temp_max,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="mb-3 col-6">
              <input
                type="text"
                placeholder="Search city"
                className="form-control search-box-city"
                autoComplete="off"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <h2>Loading</h2>;
  }
}
