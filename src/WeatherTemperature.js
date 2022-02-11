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
      <div>
        <span className="today-temperature">
          {Math.round(props.celsiusTemperature)}
        </span>
        <span className="active"> °C</span> |{" "}
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <span className="today-temperature">{fahrenheitTemperature()}</span>
        <a href="/" onClick={showCelsius}>
          °C
        </a>{" "}
        | <span className="active">°F</span>
      </div>
    );
  }
}
