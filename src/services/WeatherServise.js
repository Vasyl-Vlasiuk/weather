import { useHttp } from "../hooks/http.hook";
import moment from 'moment'

const useWeatherServices = () => {
  const {request} = useHttp();

  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
  const WEATHER_API_KEY = 'ad46d9c211ce1a388f2a6c88c5ca644f';
  const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  const geoApiHeaders = {
    'X-RapidAPI-Key': 'e94e1450cdmsh8191a73ee3622a1p1a6492jsnc63555c7a183',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  };

  const getCurrentWeather = async (lat, lon) => {
    const res = await request(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    return _transformWeather(res);
  }

  const getForecast = async (lat, lon) => {
    const res = await request(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const transformedForecast = res.list.map(_transformForecast);
    return transformedForecast.filter(obj => obj.time === "12");
  }

  const _transformWeather = (elem) => {
    return {
      id: elem.weather.id,
      temp: elem.main.temp.toFixed(),
      humidity: elem.main.humidity,
      rain: elem.rain?.['1h'],
      pressure: elem.main.pressure,
      sunriseTimestamp: elem.sys.sunrise,
      sunsetTimestamp: elem.sys.sunset,
      sunrise: moment(elem.sys.sunrise * 1000).format('LT'),
      sunset: moment(elem.sys.sunset * 1000).format('LT'), // h:mm
      windSpeed: elem.wind.speed.toFixed(1),
      iconID: elem.weather[0].icon,
      mainStatus: elem.weather[0].main,
    }
  }

  const _transformForecast = (elem) => {
    return {
      id: elem.weather.id,
      time: moment(elem.dt_txt).format('H'),
      weekdays: moment(elem.dt_txt).format('ddd'),
      temp: elem.main.temp.toFixed(),
      iconID: elem.weather[0].icon,
      status: elem.weather[0].main,
    }
  }

  const getCity = async (inputValue) => {
    return request(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 'GET', null, geoApiHeaders)
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      }
    );
  }

  const getCurrentTime = () => {
    const time = moment().format('LT');
    const date = moment();

    return {
      time,
      weekday: date.format('dddd'),
      month: date.format('MMM'),
      day: date.format('D'),
      year: date.format('YY')
    }
  }

  return {getCity, getCurrentWeather, getForecast, getCurrentTime}
}

export default useWeatherServices;