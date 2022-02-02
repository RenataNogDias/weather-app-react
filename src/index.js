import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Search from "./Search";
import Today from "./Today";

function App() {
  return (
    <div>
      <div className="container">
        <div className="card card-weather-app">
          <div className="card-body">
            <Search />
            <br />
            <Today />
            <br />
            <div className="weather-forecast" id="weather-forecast"></div>
          </div>
        </div>
      </div>
      <small className="open-source-link">
        <a
          href="https://github.com/RenataNogDias/weather-app-react"
          target="blank"
        >
          Open-source code
        </a>{" "}
        by Renata Dias
      </small>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
