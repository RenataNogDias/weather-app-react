import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function fahrenheitTemperature() {
    let fahrenheit = (props.celsiusTemperature * 9) / 5 + 32;
    let fahrenheitTemperature = Math.round(fahrenheit);
    return fahrenheitTemperature;
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemperature today-temperature">
        <span id="today-temperature">
          {Math.round(props.celsiusTemperature)}
        </span>
        <span className="temperature-units">°C</span> |{" "}
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    return (
      <div className="weatherTemperature today-temperature">
        <span id="today-temperature">{fahrenheitTemperature()}</span>
        <a href="/" onClick={showCelsius}>
          °C
        </a>{" "}
        | <span className="temperature-units">°F</span>
      </div>
    );
  }
}
