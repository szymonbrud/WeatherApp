import React, { ReactElement, useState } from 'react';
import PropTypes, { element } from 'prop-types';

import { getWeatherDataTypes } from 'hooks/useGetWeather';

export enum statusOfWeatherView {
  default,
  passed,
  notFoundCity,
  error,
}

const defaultContext = {
  status: statusOfWeatherView.default,
  data: null,
  changeStatus: () => {},
  setData: () => {},
};

export const WeatherContext = React.createContext<{
  data: getWeatherDataTypes | null;
  status: statusOfWeatherView;
  changeStatus: (status: statusOfWeatherView) => void;
  setData: (data: getWeatherDataTypes) => void;
}>(defaultContext);

export const WeatherContextProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [state, setState] = useState(defaultContext);

  const changeStatus = (status: statusOfWeatherView) =>
    setState((prev) => ({ ...prev, status }));

  const setData = (value: getWeatherDataTypes | any): void => {
    setState((prev) => ({ ...prev, data: value }));
  };

  const contextState = {
    ...state,
    changeStatus,
    setData,
  };

  return (
    <WeatherContext.Provider value={contextState}>
      {children}
    </WeatherContext.Provider>
  );
};

WeatherContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(element), element])
    .isRequired,
};
