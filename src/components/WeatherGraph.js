import { useState } from 'react';

const WeatherGraph = ({ hourlyWeather }) => {

    const [weatherVariable, setWeatherVariable] = useState('Temperature')

    const weatherVariables = {
      "Temperature": "temperature_2m",
      "Apparent Temperature": "apparent_temperature",
      "Relative Humidity": "relativehumidity_2m",
      "Precipitation": "precipitation",
      "Cloud Cover": "cloudcover"
    };

    const weatherVariableOptions = [];
    let i =0;
    for (let key in weatherVariables) {
      weatherVariableOptions.push(<option value={key} key={`weatherVariable_${i}`}>{key}</option>);
      i++;
    }

    const handleWeatherVariableChange = (event) => {
      setWeatherVariable(event.target.value);
    }
    
    const google = window.google;
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    const style = {
        width: "100%",
        height: "400px"
    }

      function drawChart() {

        const hourlyTemperature = [['Time', `${weatherVariable}`]]
        hourlyWeather.time.slice(0, 24).forEach((time, index) => {
            hourlyTemperature.push([new Date(time), hourlyWeather[weatherVariables[weatherVariable]][index]])
        })

        const data = google.visualization.arrayToDataTable(hourlyTemperature);

        const options = {
          curveType: 'function',
          legend: {position: 'none'},
          hAxis: {
            title: 'Time',
          },
          vAxis: {
            title: weatherVariable
          }
        };

        const chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

      return (
        <>
        <h3>Today's forecast</h3>
        <select onChange={handleWeatherVariableChange}>
          {weatherVariableOptions}
        </select>
        <div id="curve_chart" style={style}/>
        </>
      )
}

export default WeatherGraph;