import React from 'react';

const WeatherResults = ({ weather }) => {
  const getDayOfWeek = (index) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const nextDayIndex = (today.getDay() + index) % 7;
    return daysOfWeek[nextDayIndex];
  };

  return (
    <div>
      <h2 className="results-title">Results</h2>
      {weather.timelines.daily.slice(0, 5).map((day, index) => (
        <div key={index}>
          <p className='results-temperature'>
            {getDayOfWeek(index)}: High {Math.floor(day.values.temperatureMax)} °C, Low {Math.floor(day.values.temperatureMin)} °C
          </p>
        </div>
      ))}
    </div>
  );
};

export default WeatherResults;
