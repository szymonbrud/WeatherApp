import { useCallback, useContext } from 'react';
import debounce from 'lodash/debounce';

import { getWeather } from 'requests';

import { statusOfWeatherView, WeatherContext } from 'Context/WeatherContext';

export type getWeatherDataTypes = {
  name: string;
  cod: string | number;
  weather: Array<{ description: string; icon: string }>;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
};

const useGetWeather = (): { getCityNameDebounce: (arg0: any) => void } => {
  const { changeStatus, setData } = useContext(WeatherContext);

  const getCityName = (event: any) => {
    changeStatus(statusOfWeatherView.default);
    if (event.target.value) {
      getWeather<getWeatherDataTypes>(event.target.value)
        .then((data) => {
          if (data.cod === '404') {
            changeStatus(statusOfWeatherView.notFoundCity);
          } else if (data.cod === 200) {
            setData(data);
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
