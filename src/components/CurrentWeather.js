const CurrentWeather = ({ currentWeather }) => {

    const windDirectionStyle = {
        position: "fixed",
        transform: `rotate(${currentWeather.winddirection}deg)`,
        marginLeft: "5px"
    }

    return (
        <div className="currentWeather">
            <h3>Current Weather</h3>
            <p>Temperature: {currentWeather.temperature}&deg;C</p>
            <p>Wind Speed: {currentWeather.windspeed} km/h <span style={windDirectionStyle}>&uarr;</span></p>
        </div>
    )
}

export default CurrentWeather;