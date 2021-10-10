import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { WeatherContextProvider } from '../Context/WeatherContext';
import SearchView from '../components/SearchView';
import WeatherView from '../components/WeatherView';
import GlobalStyleProvider from '../styles/GlobalStyles';

jest.mock('../requests/index.ts');

describe('WeatherSearchAndWeatherView', () => {
  it('Should show city in WeatherView after type correct city to input', async () => {
    const Component = () => (
      <GlobalStyleProvider>
        <WeatherContextProvider>
          <>
            <SearchView />
            <WeatherView />
          </>
        </WeatherContextProvider>
      </GlobalStyleProvider>
    );

    const { getByPlaceholderText } = render(<Component />);

    const weatherElement = screen.queryByText('bezchmurnie');
    expect(weatherElement).toBeNull();

    const input = getByPlaceholderText('city');

    fireEvent.change(input, { target: { value: 'Kraków' } });

    const weatherElemenet = await screen.findByText('bezchmurnie');

    expect(weatherElemenet).toBeDefined();
  });

  it('Should return incorrect city name', async () => {
    const Component = () => (
      <GlobalStyleProvider>
        <WeatherContextProvider>
          <>
            <SearchView />
            <WeatherView />
          </>
        </WeatherContextProvider>
      </GlobalStyleProvider>
    );

    const { getByPlaceholderText } = render(<Component />);

    expect(screen.queryByText('bezchmurnie')).toBeNull();

    const input = getByPlaceholderText('city');

    fireEvent.change(input, { target: { value: 'nonExist' } });

    expect(screen.queryByText('bezchmurnie')).toBeNull();
  });
});
