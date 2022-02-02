import React from "react";
import "./Search.css";

export default function Search() {
  return (
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
  );
}
