import { useState, useEffect } from 'react';
import CurrentWeather from '../components/CurrentWeather'

const CityWeather = ({ city }) => {

    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        getWeatherData(city)
    },[city]);

    const getWeatherData = (city) => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true&hourly=temperature_2m`)
            .then(res => res.json())
            .then(data => setWeatherData(data))
            .catch(error => console.error(error))
    }

    return (
        <>
            <h2>{city.name}</h2>
            <p>Latitude: {city.latitude}, Longitude: {city.longitude}</p>
            {weatherData && <CurrentWeather currentWeather={weatherData.current_weather} />}
        </>
    );
}

export default CityWeather;