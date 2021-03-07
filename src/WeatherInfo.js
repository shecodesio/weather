import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />, {props.data.description}
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="clearfix temperature-container">
            <div className="float-right">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <div className="float-right">
              <WeatherIcon code={props.data.icon} size={38} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
