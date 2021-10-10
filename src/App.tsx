import React, { ReactElement } from 'react';
import styled from 'styled-components';

import GlobalStyleProvider from 'styles/GlobalStyles';
import SearchView from 'components/SearchView';
import { WeatherContextProvider } from 'Context/WeatherContext';

import 'style.css';
import WeatherView from './components/WeatherView';

const MainWrapper = styled.main`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.creme};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const App = (): ReactElement => (
  <GlobalStyleProvider>
    <WeatherContextProvider>
      <MainWrapper>
        <SearchView />
        <WeatherView />
      </MainWrapper>
    </WeatherContextProvider>
  </GlobalStyleProvider>
);

export default App;
