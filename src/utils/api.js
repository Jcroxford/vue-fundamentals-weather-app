import axios from 'axios';

const apiKey = '3af5d393e9826f8e9c08ee5f67571f39';

function getCurrentWeather(location) {
  const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${location}&type=accurate&APPID=${apiKey}`);

   return axios.get(encodedURI)
    .then( response => {
      console.log(JSON.stringify(response.data, null, 3));
    })
    .catch(handleError);
}

function getFiveDayWeather(location) {
  const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&type=accurate&APPID=${apiKey}&cnt=5`);

  return axios.get(encodedURI)
    .then( response => {
      console.log(response.data.list);
    })
}

function handleError(error) {
  console.warn(error);
  return null;
}

const currentWeather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&type=accurate&APPID=${apiKey}`

const fiveDayWeather = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&type=accurate&APPID=${apiKey}&cnt=5`

export default {
  getCurrentWeather,
  getFiveDayWeather,
}

// simple view: day, month, monthday, weather image city as header

// detail view: weather image, date info, location, weather description, min/max temp, humidity