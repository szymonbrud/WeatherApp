export const getWeather = async <T>(cityName: string): Promise<T> => {
  try {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=PL`
    );
    return await response.json();
  } catch (err: any) {
    throw new Error(err);
  }
};
