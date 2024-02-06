import React, { useState } from 'react';
import WeatherSearch from './WeatherSearch';
import WeatherResults from './WeatherResults';
import './App.css';

export default function App() {
  const [weather, setWeather] = useState(null);

  const searchWeather = async (query) => {
    const url = `https://api.tomorrow.io/v4/weather/forecast?location=${query}&apikey=${process.env.REACT_APP_WEATHER_API_KEY}`
    try {
      const res = await fetch(url);
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div>
        <h1 className="title">Weather Forecast</h1>
      </div>
      <div>
        <WeatherSearch onSearch={searchWeather} />
      </div>
      {weather && weather.timelines && weather.timelines.daily && (
        <WeatherResults weather={weather} />
      )}
    </div>
  );
}
