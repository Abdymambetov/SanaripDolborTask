import React, { useState } from 'react';
import classes from './task3.module.css';
import { WeatherData, fetchWeather } from '../../common/constants';

const Task3 = () => {
    const [city, setCity] = useState<string>('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

    const handleSearch = async() => {
        if(!!city){
            try{
                const data = await fetchWeather(city);
                setWeatherData(data);
            } catch(error){
                console.log(`Error fetching weather data`)
            }
        }
    }
  return (
    <div className={classes.main}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
      />
      <button onClick={handleSearch}>Get Weather</button>
      {!!weatherData && (
        <div>
          <p>{weatherData.name}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
          />
          <p>{Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>{weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

export default Task3