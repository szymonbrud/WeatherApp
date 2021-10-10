const exampleDataWeatherKrakow = {
  coord: {
    lon: 19.9167,
    lat: 50.0833,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'bezchmurnie',
      icon: '01d',
    },
  ],
  base: 'stations',
  main: {
    temp: 282.8,
    feels_like: 280.91,
    temp_min: 282.12,
    temp_max: 284.24,
    pressure: 1025,
    humidity: 56,
  },
  visibility: 10000,
  wind: {
    speed: 3.6,
    deg: 60,
  },
  clouds: {
    all: 0,
  },
  dt: 1633880880,
  sys: {
    type: 2,
    id: 2009211,
    country: 'PL',
    sunrise: 1633841651,
    sunset: 1633881609,
  },
  timezone: 7200,
  id: 3094802,
  name: 'Kraków',
  cod: 200,
};

export const getWeather = (cityName: string): Promise<any> => {
  if (cityName === 'Kraków') {
    return new Promise((resolve) => {
      resolve(exampleDataWeatherKrakow);
    });
  } else {
    return new Promise((resolve) => {
      resolve({ cod: '404' });
    });
  }
};
