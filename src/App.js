import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);

  const searchWeather = async (e) => {
    e.preventDefault();

    const url = `https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=FqoZV85twVhEoYs0uk4xEkkl2mAWJwdn`;

    try {
      const res = await fetch(url);
      const data = await res.json();
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
      {weather && (
        <div>
          <h2>Weather Results</h2>
          {/* Display the high and low temperatures for the next 10 days with days of the week */}
          {weather.timelines.daily.slice(1, 11).map((day, index) => (
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
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
