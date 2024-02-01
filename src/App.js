import React, { useState } from 'react';
import './App.css';


export default function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);

  const searchWeather = async (e) => {
    e.preventDefault();

    const url = `https://api.tomorrow.io/v4/weather/forecast?location=${query}&apikey=${process.env.REACT_APP_WEATHER_API_KEY}`
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      setWeather(data);
      setQuery('');
    } catch (err) {
      console.log(err);
    }
  };

  const getDayOfWeek = (index) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const nextDayIndex = (today.getDay() + index) % 7;
    return daysOfWeek[nextDayIndex];
};

  return (
    <div className="container">
      <div>
        <h1 className="title">Weather Forecast</h1>
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
            id='query'
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
        <h2 className="results--title">Results</h2>
        {weather.timelines.daily.slice(0, 5).map((day, index) => (
          <div key={index}>
            <p className="results--temperature">
              {getDayOfWeek(index)}: High {Math.floor(day.values.temperatureMax)} °C, Low {Math.floor(day.values.temperatureMin)} °C
            </p>
          </div>
        ))}
      </div>
    )}
    </div>
  );
}
