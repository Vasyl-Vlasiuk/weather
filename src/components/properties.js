import styled from "styled-components";
import { useSelector } from 'react-redux';
import { ReactComponent as WindIcon } from "../resourses/img/properties/Wind-direction.svg";
import { ReactComponent as HumIcon } from "../resourses/img/properties/Hum.svg";
import { ReactComponent as RainIcon } from "../resourses/img/properties/Rain.svg";

import Devider from "./styles/Devider.styled";


const PropertiesStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  text-shadow: -2px 2px 0.6px rgba(0, 0, 0, 0.1);
`

const Property = styled.div`
  display: flex;
  font-weight: 300;

  svg {
    margin-right: 14px;
    align-self: center;
  }
`

const Properties = () => {
  const { windSpeed, humidity, rain } = useSelector(state => state.weather.current);

  return (
    <PropertiesStyled>
      <Property>
        <WindIcon /> Wind {windSpeed} km/h
      </Property>
      <Devider/>
      <Property>
        <HumIcon /> Hum {humidity}%
      </Property>
      <Devider />
      <Property>
        <RainIcon /> Rain {rain ? rain * 100 : '2'}%
      </Property>
    </PropertiesStyled>
  );
}

export default Properties;