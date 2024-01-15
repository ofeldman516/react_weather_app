import React from 'react';
import './App.css';

export default function App() {
  const [query, setQuery] = ('');
  const [weather, setWeather] = [];

  const searchWeather = async (e) => {
    e.preventDefault();

  const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m';

  try {
    const res = await fetch(url);
    const data = await res.json();
    setWeather(data.results);
  } catch (err) {
    console.log(err);
  }
}
  return (
    <>
      <div>
        <h1>Weather App</h1>
      </div><div>
          <form>
            <label className='label' htmlFor='query'>City</label>
            <input className='input' type='text' name='query'
              placeholder='i.e. Berlin'>
            </input>
            <button className="button" type="submit">Search</button>
          </form>
        </div>
      </>
  )
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
