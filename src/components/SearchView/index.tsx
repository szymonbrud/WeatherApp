import React, { ReactElement, useContext } from 'react';

import useGetWeather from 'hooks/useGetWeather';
import { statusOfWeatherView, WeatherContext } from 'Context/WeatherContext';

import { SearchInput, SearchInputWrapper, Title } from './styles';

const SearchView = (): ReactElement => {
  const { getCityNameDebounce } = useGetWeather();

  const { status } = useContext(WeatherContext);

  return (
    <>
      {status !== statusOfWeatherView.passed && <Title>Weather app</Title>}
      <SearchInputWrapper status={status}>
        <SearchInput
          type="text"
          placeholder="miasto"
          onChange={getCityNameDebounce}
        />
      </SearchInputWrapper>
    </>
  );
};

export default SearchView;
