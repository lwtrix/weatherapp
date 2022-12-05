import { useParams } from "react-router";
import { useEffect, useState } from "react";

const CityWeather = () => {
  const params = useParams();
  const [forecastDetails, setForecastDetails] = useState({});

  const convertToFahrenheit = (kelvinValue) => {
    return ((kelvinValue - 273.15) * 9) / 5 + 32;
  };

  const fetchForecastDetails = async () => {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${params.cityName}&appid=267ea8712403af720bf6050196b5d2e1`
    );
    const data = await res.json();
    console.log(data)
    setForecastDetails(data);
  };
  useEffect(() => {
    fetchForecastDetails();
  }, []);

  console.log(params);
  return (
    <> <h1>{forecastDetails.list && forecastDetails.city.name}</h1>
       {forecastDetails.list ? forecastDetails.list.map((data) => (
        <div key={data.weather.id} className="forecast-details">
          <p>Forecast for: {data.dt_txt}</p>
          <p> Clouds: {data.clouds.all}%</p>
          <span>
            Temperature: {Math.floor(convertToFahrenheit(data.main.temp))}&deg;F 
            Feels Like: {Math.floor(convertToFahrenheit(data.main.feels_like))}&deg;F 
          </span>
          <hr />
        </div>
      )) : 'nothing found'}
    </>
  );
};

export default CityWeather;
