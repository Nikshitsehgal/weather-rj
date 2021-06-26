import React from "react";
import Logo from "../../assets/Logo.png";
import "./CitySearchComponent.css";

const CitySearchComponent = ({ setCity, fetchWeather }) => {
  return (
    <div>
      <img className="logo" src={Logo} alt="" />
      <h2>Enter a city to find Weather</h2>
      <form className="form" onSubmit={fetchWeather}>
        <input
          className="input"
          type="text"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default CitySearchComponent;
