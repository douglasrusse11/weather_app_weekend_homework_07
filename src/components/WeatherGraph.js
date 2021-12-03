const WeatherGraph = ({ hourlyWeather }) => {
    const google = window.google;
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    const style = {
        width: "100%",
        height: "400px"
    }

      function drawChart() {

        const hourlyTemperature = [['Time', 'Temperature']]
        hourlyWeather.time.slice(0, 24).forEach((time, index) => {
            hourlyTemperature.push([time.split('T')[1], hourlyWeather.temperature_2m[index]])
        })

        const data = google.visualization.arrayToDataTable(hourlyTemperature);

        const options = {
          title: "Today's Forecast",
          curveType: 'function',
          legend: { position: 'bottom' },
        };

        const chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

      return (
        <div id="curve_chart" style={style}></div>
      )
}

export default WeatherGraph;