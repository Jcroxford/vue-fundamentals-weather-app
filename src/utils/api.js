import axios from 'axios';

const apiKey = '3af5d393e9826f8e9c08ee5f67571f39';

function getCurrentWeather(location) {
  const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${location}&type=accurate&APPID=${apiKey}`);
   return axios.get(encodedURI)
    .then( response => {
      return response.data;
    });
}

function getFiveDayWeather(location) {
  const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&type=accurate&APPID=${apiKey}&cnt=5`);
  return axios.get(encodedURI)
    .then( response => {
      return response.data.list;
    });
}

function handleError(error) {
  console.warn(error);
  return null;
}

export default {
  getWeatherData: location => {
    return axios.all([
      getCurrentWeather(location),
      getFiveDayWeather(location)
    ])
      .then( data => {
        const currentWeather = data[0];
        const fiveDayWeather = data[1];

        return {
          currentWeather,
          fiveDayWeather
        };
      })
      .catch(handleError);
  },
}