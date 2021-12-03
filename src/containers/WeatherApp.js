import { useState } from 'react';
const WeatherApp = () => {
    const cities = [
        {
            name: "Edinburgh",
            latitude: 55.95618,
            longitude: -3.18920
        },
        {
            name: "Glasgow",
            latitude: 55.86777,
            longitude: -4.25169
        },
        {
            name: "Dundee",
            latitude: 56.46510,
            longitude: -2.96889
        },
        {
            name: "Aberdeen",
            latitude: 57.15342,
            longitude: -2.09276
        },
        {
            name: "Inverness",
            latitude: 57.47879,
            longitude: -4.22409
        },
        {
            name: "Perth",
            latitude: 56.39732,
            longitude: -3.43140
        },
        {
            name: "Stirling",
            latitude: 56.11851,
            longitude: -3.93764
        },
    ];

    const [city, setCity] = useState(null);

    const handleCityChange = (event) => {
        setCity(cities.find((city) => city.name === event.target.value))
    }
    
    return (
        <>
            <h1>Weather App</h1>
            <select defaultValue="init" onChange={handleCityChange}>
                <option disabled value="init">Select a city</option>
                {cities.map((city, index) => {
                    return (
                        <option value={city.name} key={`city_${index}`}>{city.name}</option>
                    )
                })}
        </select>
        <h2>{city ? city.name : "No city selected"}</h2>
        </>
    );
}

export default WeatherApp;