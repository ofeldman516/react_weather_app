import React, { useState } from 'react';
import './App.css';


export default function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);

  const searchWeather = async (e) => {
    e.preventDefault();

    const url = `https://api.tomorrow.io/v4/weather/forecast?location=${query}&apikey=FqoZV85twVhEoYs0uk4xEkkl2mAWJwdn`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      setWeather(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getDayOfWeek = (index) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + index);
    return daysOfWeek[nextDay.getDay()];
  };

  return (
    <>
      <div>
        <h1>Weather App</h1>
      </div>
      <div>
        <form onSubmit={searchWeather}>
          <label className='label' htmlFor='query'>
            City
          </label>
          <input
            className='input'
            type='text'
            name='query'
            placeholder='i.e. Berlin'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className='button' type='submit'>
            Search
          </button>
        </form>
      </div>
      {weather && weather.timelines && weather.timelines.daily && (
  <div>
    <h2>Weather Results</h2>
    {weather.timelines.daily.slice(0, 5).map((day, index) => (
      <div key={index}>
        <p>
          {getDayOfWeek(index)}: High {Math.floor(day.values.temperatureMax)} °C, Low {Math.floor(day.values.temperatureMin)} °C
        </p>
      </div>
    ))}
  </div>
)}
    </>
  );
}
