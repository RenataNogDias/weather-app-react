import React from "react";

import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card card-weather-app">
          <div className="card-body">
            <Weather defaultCity="Porto" />
            <div className="weather-forecast" id="weather-forecast"></div>
          </div>
        </div>
      </div>
      <small className="open-source-link">
        <a
          href="https://github.com/RenataNogDias/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Renata Dias
      </small>
    </div>
  );
}
