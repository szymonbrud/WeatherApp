export const getWeather = async (cityName: string): Promise<any> => {
  try {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    );
    return await response.json();
  } catch (err) {
    return err;
  }
};
