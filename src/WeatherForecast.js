import React from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "73a00877081bd43422bdee0f3022beb5";
  let units = "metric";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);
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
