import React from "react";
import CloudyNight from "../../assets/icons/cloudy-night.svg";
import Cloudy from "../../assets/icons/cloudy.svg";
import Day from "../../assets/icons/day.svg";
import Humidity from "../../assets/icons/humidity.svg";
import Night from "../../assets/icons/night.svg";
import PerfectDay from "../../assets/icons/perfect-day.svg";
import Pressure from "../../assets/icons/pressure.svg";
import RainNight from "../../assets/icons/rain-night.svg";
import Rain from "../../assets/icons/rain.svg";
import Storm from "../../assets/icons/storm.svg";
import Sunny from "../../assets/icons/sunny.svg";
import Sunrise from "../../assets/icons/temp.svg";
import Wind from "../../assets/icons/wind.svg";
import Mist from "../../assets/icons/mist.svg";
import Snow from "../../assets/icons/snow.svg";
import "./WeatherComponent.css";

const WeatherIcons = {
  "01d": Sunny,
  "01n": Night,
  "02d": Day,
  "02n": CloudyNight,
  "03d": Cloudy,
  "03n": Cloudy,
  "04d": PerfectDay,
  "04n": CloudyNight,
  "09d": Rain,
  "09n": RainNight,
  "10d": Rain,
  "10n": RainNight,
  "11d": Storm,
  "11n": Storm,
  "13d": Snow,
  "13n": Snow,
  "50d": Mist,
  "50n": Mist,
};

const WeatherInfoComponent = ({ name, value, icon }) => {
  return (
    <div className="info-container">
      <img src={icon} className="info-icon" alt="icon" />
      <div className="info-label">
        {value}
        <span>{name}</span>
      </div>
    </div>
  );
};

const WeatherComponent = ({ weather }) => {
  const isDay = weather.weather[0].icon.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : 
            ${new Date(timeStamp * 1000).getMinutes()}`;
  };

  return (
    <>
      <div className="temp-block">
        <p className="condition">
          <span>{Math.floor(weather.main.temp - 273)}°C</span> |
          {weather.weather[0].description}
        </p>
        <img
          src={WeatherIcons[weather.weather[0].icon]}
          className="icon"
          alt="icon"
        />
      </div>
      <div className="location">
        {`${weather.name}, ${weather.sys.country}`}
      </div>
      <div className="weather-info">Weather Info</div>
      <div className="weather-info-container">
        <WeatherInfoComponent
          icon={Sunrise}
          name={isDay ? "Sunset" : "Sunrise"}
          value={getTime(weather.sys[isDay ? "sunset" : "sunrise"])}
        />
        <WeatherInfoComponent
          icon={Humidity}
          name="Humidity"
          value={weather.main.humidity}
        />
        <WeatherInfoComponent
          icon={Wind}
          name="Wind"
          value={weather.wind.speed}
        />
        <WeatherInfoComponent
          icon={Pressure}
          name="Pressure"
          value={weather.main.pressure}
        />
      </div>
    </>
  );
};

export default WeatherComponent;
