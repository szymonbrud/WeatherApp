export const getWeather = (cityName: string): Promise<any> => {
  if (cityName === 'Kraków') {
    return new Promise((resolve) => {
      resolve({ cod: 200 });
    });
  } else {
    return new Promise((resolve) => {
      resolve({ cod: '404' });
    });
  }
};
