import { useHttp } from "../hooks/http.hook";

const useWeatherServices = () => {
  const {request} = useHttp();

  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
  const WEATHER_API_KEY = 'ad46d9c211ce1a388f2a6c88c5ca644f';
  const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  const forecastNumber = 40;
  const geoApiOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e94e1450cdmsh8191a73ee3622a1p1a6492jsnc63555c7a183',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };

  const getCurrentWeather = async (lat, lon) => {
    const res = await request(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    return _transformWeather(res);
  }

  const getForecast = async (lat, lon) => {
    const res = await request(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&cnt=${forecastNumber}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecast = res.list.map(_transformForecast);
    return forecast.filter(obj => obj.time === 12);
  }

  const _transformWeather = (elem) => {
    const transformTime = (seconds) => {
      const time = new Date (seconds * 1000)
        .toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })
      return time.split(' ')[0];
    }

    return {
      id: elem.weather.id,
      temp: elem.main.temp.toFixed(),
      humidity: elem.main.humidity,
      rain: elem.rain?.['1h'],
      pressure: elem.main.pressure,
      sunriseTimestamp: elem.sys.sunrise,
      sunsetTimestamp: elem.sys.sunset,
      sunrise: transformTime(elem.sys.sunrise),
      sunset: transformTime(elem.sys.sunset),
      windSpeed: elem.wind.speed.toFixed(1),
      iconID: elem.weather[0].icon,
      mainStatus: elem.weather[0].main,
    }
  }

  const _transformForecast = (elem) => {
    const weekdays = new Date(elem.dt_txt).toDateString().split(" ")[0];
    const time = new Date(elem.dt_txt).getHours();

    return {
      id: elem.weather.id,
      weekdays,
      time,
      temp: elem.main.temp.toFixed(),
      iconID: elem.weather[0].icon,
      status: elem.weather[0].main,
    }
  }

  const getCity = async (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  }

  const getCurrentTime = () => {
    const date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}).split(', ');
    const time = new Date().toLocaleTimeString('en-us', { hour: 'numeric', hour12: true, minute: 'numeric' });

    return {
      time,
      weekday: date[0],
      month: date[1].split(' ').shift(),
      day: date[1].split(' ').pop(),
      year: date[2].slice(2)
    }

  }

  return {getCity, getCurrentWeather, getForecast, getCurrentTime}
}

export default useWeatherServices;