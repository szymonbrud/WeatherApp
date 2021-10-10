import React, { ReactElement, useContext } from 'react';

import { statusOfWeatherView, WeatherContext } from 'Context/WeatherContext';
import Temperature from 'components/Temperature/Temperature';

import {
  MainWrapper,
  DetailsTitle,
  DetailsContent,
  WeatherStatus,
  CityName,
  DetailsGrid,
  Image,
} from './styles';

const WeatherView = (): ReactElement => {
  const { status, data } = useContext(WeatherContext);

  if (status === statusOfWeatherView.passed && data !== null) {
    return (
      <MainWrapper>
        <Image
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        />
        <Temperature temp={data.main.temp} />
        <div style={{ position: 'relative', zIndex: 20 }}>
          <CityName>{data.name}</CityName>
          <WeatherStatus>{data.weather[0].description}</WeatherStatus>
          <DetailsGrid>
            <DetailsTitle>Wilgotność:</DetailsTitle>
            <DetailsContent>{data.main.humidity}%</DetailsContent>
            <DetailsTitle>Ciśnienie:</DetailsTitle>
            <DetailsContent>{data.main.pressure}pHa</DetailsContent>
          </DetailsGrid>
        </div>
      </MainWrapper>
    );
  }

  return <></>;
};

export default WeatherView;
