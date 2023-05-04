import { useSelector } from 'react-redux';
import { Navigation,} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Card from './card';

import styled from 'styled-components'
import 'swiper/css';
import 'swiper/css/navigation';


export const ForecastContainer = styled.div`
  display: flex;
  position: relative;
  width: 602px;
`

const Forecast = () => {
  const forecast = useSelector(state => state.weather.forecast);

  return (
    <ForecastContainer>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
      >
        {forecast.length && forecast.map((day, i) => (
          <SwiperSlide key={i} >
            <Card dayWeather={day} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ForecastContainer>



  )
}

export default Forecast;