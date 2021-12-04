import { useState, useEffect } from 'react';
import CurrentWeather from '../components/CurrentWeather';
import WeatherGraph from '../components/WeatherGraph';
import CityMap from '../components/CityMap';
import './CityWeather.css';

const CityWeather = ({ city }) => {

    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        getWeatherData(city)
    },[city]);

    const getWeatherData = (city) => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,cloudcover&daily=precipitation_sum&timezone=Europe%2FLondon`)
            .then(res => res.json())
            .then(data => setWeatherData(data))
            .catch(error => console.error(error))
    }

    return (
        <>
            <h2>{city.name}</h2>
            <p>Latitude: {city.latitude}, Longitude: {city.longitude}</p>
            <div id="current-weather-city-map">
            {weatherData &&  <CurrentWeather currentWeather={weatherData.current_weather} daily={weatherData.daily} />}
            <CityMap city={city} />
            </div>
            {weatherData && <WeatherGraph hourlyWeather={weatherData.hourly}/>}
        </>
    );
}

export default CityWeather;