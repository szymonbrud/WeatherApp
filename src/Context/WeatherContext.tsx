import React, { ReactElement, useState } from 'react';
import PropTypes, { element } from 'prop-types';

export enum statusOfWeatherView {
  default,
  passed,
  notFoundCity,
  error,
}

const defaultContext = {
  status: statusOfWeatherView.default,
  data: null,
  changeStatus: (status: statusOfWeatherView) => null,
};

export const WeatherContext = React.createContext(defaultContext);

export const WeatherContextProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [state, setState] = useState(defaultContext);

  const changeStatus = (status: statusOfWeatherView) =>
    setState((prev) => ({ ...prev, status }));

  const contextState = {
    ...state,
    changeStatus,
  };

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <WeatherContext.Provider value={contextState}>
      {children}
    </WeatherContext.Provider>
  );
};

WeatherContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(element), element])
    .isRequired,
};
