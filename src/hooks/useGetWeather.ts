import { useCallback, useContext } from 'react';
import debounce from 'lodash/debounce';

import { getWeather } from 'requests';

import { statusOfWeatherView, WeatherContext } from 'Context/WeatherContext';

const useGetWeather = (): any => {
  const { changeStatus } = useContext(WeatherContext);

  const getCityName = (event: any) => {
    changeStatus(statusOfWeatherView.default);
    if (event.target.value) {
      getWeather(event.target.value)
        .then((data) => {
          if (data.cod === '404') {
            changeStatus(statusOfWeatherView.notFoundCity);
          } else if (data.cod === 200) {
            changeStatus(statusOfWeatherView.passed);
          }
        })
        .catch((err) => {
          changeStatus(statusOfWeatherView.error);
          console.error(err);
        });
    }
  };

  const getCityNameDebounce = useCallback(debounce(getCityName, 300), []);

  return {
    getCityNameDebounce,
  };
};

export default useGetWeather;
