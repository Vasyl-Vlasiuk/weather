import styled from "styled-components";
import Speed from "../resourses/img/Speed.svg";

const Container = styled.div`
  align-items: center;
`
const Title = styled.div`
  margin-bottom: 30px;
  font-size: 34px;
  font-weight: 300;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.1) -2px 2px 0.6px;
`
const Value = styled.div`
  text-align: center;
  margin-top: -132px;
  font-size: 19px;
  font-weight: 300;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.1) -2px 2px 0.6px;
`
const Scale = styled.div`
  background-image: url(${Speed});
  background-repeat: no-repeat;
  width: 184px;
  height: 184px;
  
  div {
    position: relative;
    transform: rotateZ(${({ value }) => value}deg);
    width: 184px;
    height: 184px;
  }

  span {
    position: absolute;
    left: -4px;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #EFEDED;
  }
`

const airWidget = ({ children, value }) => {
  const deg = value / (children === 'Air Quality' ? 5 : 10) * 180;

  const getStatusWeather = () => {
    if (deg < 60) {
      return "Moderate"
    } else if (deg < 120) {
      return "Average"
    } else {
      return "High"
    }
  }

  return (
    <Container>
      <Title >{children}</Title>
      <Scale value={deg}>
        <div><span /></div>
      </Scale>
      <Value>
        {value}/{children === 'Air Quality' ? 5 : 10}
        <br />
        {getStatusWeather()}
      </Value>
    </Container>
  );
}

export default airWidget;