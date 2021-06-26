import { useState } from "react";
import axios from "axios";
import CitySearchComponent from "./Components/CitySearchComponent/CitySearchComponent";
import WeatherComponent from "./Components/WeatherComponent/WeatherComponent";
import "./App.css";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const fetchWeather = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    setIsSubmit(true);
    setWeather(response.data);
  };

  const handleBackClick = () => {
    setWeather(null);
    setIsSubmit(false);
  };

  return (
    <div className="App">
      {isSubmit && (
        <button onClick={handleBackClick} className="back">
          ⬅<span>Search another City</span>
        </button>
      )}
      <div className="container">
        <h1>React Weather App</h1>
        {weather ? (
          <WeatherComponent weather={weather} />
        ) : (
          <CitySearchComponent setCity={setCity} fetchWeather={fetchWeather} />
        )}
      </div>
    </div>
  );
}

export default App;
