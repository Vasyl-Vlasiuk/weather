import { useSelector } from 'react-redux';
import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 200px;
  width: 110px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 15px 0;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`
export const Text = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  text-shadow: -2px 2px 0.6px rgba(0, 0, 0, 0.1);
`
export const Img = styled.img`
  width: 80px;
  height: 65px;
  object-fit: contain;
`

const Card = ({dayWeather}) => {
  const { unit } = useSelector(state => state.weather);
  const { temp, iconID, weekdays, status } = dayWeather;
  const temerature = unit ? temp : Math.floor(temp * 9/5 + 32);

  return (
    <StyledCard >
      <Text>
        {temerature} {unit ? '°C' : 'F'}
      </Text>
      <Img 
        src={`img/icons/${iconID}.png`} 
        alt={`status icon - ${status}`}
      />
      <Text>
        {weekdays}
      </Text>
    </StyledCard>
  )
}

export default Card;