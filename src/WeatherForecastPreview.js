import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);

    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);

    return `${temperature}°`;
  }

  return (
    <div className="WeatherForecastPreview">
      <div className="forecast-time">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={38} />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{maxTemperature()}</span>
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
