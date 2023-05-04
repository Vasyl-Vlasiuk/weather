import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentWeather, fetchForecast, timeFetch, changeCity} from './redux/actions';
import useWeatherServices from "./services/WeatherServise";

import Header from './components/header';
import CurrentWeather from './components/currentWeather';
import Forcast from './components/forecast';
import Search from './components/search';
import HourPanel from './components/hourPanel';
import AirPanel from './components/airPanel';

import { ThemeProvider } from 'styled-components';
import { Wrapper, Main, Aside } from './components/styles/App.styled';


const theme = {
  scheme: [
    {
      primary: 'linear-gradient(to left bottom, #a980b7, #bd8cbc, #d099c2, #e1a7c7, #f0b5ce)',
      secondary: 'linear-gradient(to right top, #c595c0, #c69bc4, #c8a1c8, #c9a7cc, #cbadd0, #c8abcf, #c4a8ce, #c1a6cd, #b79bc7, #ae90c2, #a485bc, #997bb7)'
    },
    {
      primary: 'linear-gradient(to left bottom, #868fe1, #889ee6, #8facea, #99baec, #a7c7ed)',
      secondary: 'linear-gradient(to left, #8583df, #8789e1, #898fe2, #8b95e3, #8e9be4, #939fe5, #97a4e6, #9ca8e7, #a2ace8, #a8b0e9, #aeb5eb, #b4b9ec)'
    },
    {
      primary: 'linear-gradient(to right, #533f68, #5a4570, #614a79, #695081, #70568a)',
      secondary: 'linear-gradient(to left bottom, #7b6096, #80659b, #856ba1, #8b70a6, #9076ac, #947baf, #987fb2, #9c84b5, #9f89b7, #a38fb9, #a694ba, #aa9abc)'
    },
    {
      primary: 'linear-gradient(to left bottom, #adb9e7, #bdb6e4, #cdb3df, #dab1d7, #e5afce)',
      secondary: 'linear-gradient(to left bottom, #a1c5f3, #abc8f3, #b4cbf2, #bccef2, #c4d1f1, #c6d0ef, #c8cfee, #caceec, #c8c8e9, #c7c2e5, #c6bce1, #c5b6dc)'
    },
    {
      primary: 'linear-gradient(to left bottom, #9687c9, #9b95d7, #9fa3e4, #a5b1f1, #aabffe)',
      secondary: 'linear-gradient(to left top, #987db8, #987fbb, #9880be, #9782c0, #9784c3, #9a88c6, #9d8dc8, #a091cb, #a79acf, #afa2d3, #b6abd7, #beb4db)'
    },
    {
      primary: 'linear-gradient(to right top, #49365c, #564b75, #62628e, #6e79a8, #7991c1)',
      secondary: 'linear-gradient(to left bottom, #9bc4f1, #9ec1ec, #a0bee7, #a2bce1, #a4b9dc, #9fb2d5, #9baccf, #96a5c8, #8a99be, #7f8cb4, #7480aa, #6a74a0)'
    },
  ]
}

function App() {
  const { getCurrentWeather, getForecast, getCurrentTime } = useWeatherServices();
  const dispatch = useDispatch();

  const { themeIndex } = useSelector(state => state.theme);

  useEffect(() => {
    const initialCity = {
      value: '50.20 26.38',
      label: 'Netishyn, UA'
    }
    handleOnSearchChange(initialCity);
  }, []);

  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    dispatch(fetchCurrentWeather(getCurrentWeather, latitude, longitude));
    dispatch(fetchForecast(getForecast, latitude, longitude));

    dispatch(changeCity(searchData.label));
    dispatch(timeFetch(getCurrentTime));
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Main index={themeIndex}>
          <Header />
          <CurrentWeather />
          <Forcast />
        </Main>

        <Aside index={themeIndex}>
          <Search onSearchChange={handleOnSearchChange} />
          <HourPanel />
          <AirPanel />
        </Aside>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;