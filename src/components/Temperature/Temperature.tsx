import React, { ReactElement } from 'react';

import { MainWrapper, tempStatuses } from './styles';

const Temperature = ({ temp }: { temp: number }): ReactElement => {
  const tempCelsius = Math.floor(temp - 273);

  const tempStatus =
    tempCelsius < 12
      ? tempStatuses.cold
      : tempCelsius < 25
      ? tempStatuses.cool
      : tempStatuses.hot;

  return <MainWrapper tempStatus={tempStatus}>{tempCelsius}℃</MainWrapper>;
};

export default Temperature;
