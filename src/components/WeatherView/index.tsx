import React, { ReactElement, useContext } from 'react';
import { statusOfWeatherView, WeatherContext } from 'Context/WeatherContext';

const WeatherView = (): ReactElement => {
  const { status } = useContext(WeatherContext);

  if (status === statusOfWeatherView.passed) {
    return <h1>Weather</h1>;
  }

  return <></>;
};

export default WeatherView;
