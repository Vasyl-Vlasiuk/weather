import { useSelector } from 'react-redux';
import { Container, Img, Temperature, Date, Day } from './styles/CurrentWeather.styled';
import Devider from "./styles/Devider.styled";
import Properties from  './properties';

const CurrentWeather = () => {
  const { unit } = useSelector(state => state.weather);
  const { temp, iconID } = useSelector(state => state.weather.current);
  const { time, weekday, month, day, year } = useSelector(state => state.currentData.time);

  const temerature = unit ? temp : Math.floor(temp * 9/5 + 32);

  return (
    <Container>
      <Img src={`img/icons/${iconID}.png`} alt="weather icon"/>
      <Temperature>
        {temerature}
        <span>
          {unit ? '°C' : 'F'}
        </span>
      </Temperature>
      <Date>{day}th {month} '{year}</Date>
      <Day> {weekday} <Devider /> {time} </Day>
      <Properties />
    </Container>

  );
}

export default CurrentWeather;
