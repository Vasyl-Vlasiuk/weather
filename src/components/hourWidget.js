import React from "react";
import styled from "styled-components";
import Flex from "./styles/Flex.styled";


const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  width: ${({size}) => size ? "130px" : "110px"};
  height: ${({size}) => size ? "245px" : "210px"};
  background: rgba(255, 255, 255, 0.26);
  border-radius: 100px;
  margin-bottom: ${({size}) => size ? "10px" : "0px"};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`
const Title = styled.div`
  font-weight: 300;
  color: #fff;
  text-shadow: -2px 2px 0.6px rgba(0, 0, 0, 0.1);
  margin-bottom: 28px;
`
const Clock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 100px;
  position: relative;
  border-radius: 50%;
  padding: 15px 0 0;

  &:before {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgb(167 136 190);
    z-index: 9;
  }

`
const Hour = styled.div`
  position: absolute;
  z-index: 2;

  span {
    width: 46px;
    height: 46px;
    display: flex;
    justify-content: center;
    position: relative;
    border-radius: 50%;
    transform: rotateZ(${({value}) => value ? value : 0}deg);

    &:before {
      content: '';
      position: absolute;
      width: 4px;
      height: 23px;
      background-color: #fff;
      z-index: 5;
      border-radius: 3px 3px 0 0;
  }
`
const Minute = styled.div`
  position: absolute;

  span {
    width: 72px;
    height: 72px;
    display: flex;
    justify-content: center;
    position: relative;
    border-radius: 50%;
    transform: rotateZ(${({value}) => value ? value : 0}deg);

    &:before {
      content: '';
      position: absolute;
      width: 4px;
      height: 36px;
      background-color: #828282;
      z-index: 6;
      border-radius: 3px 3px 0 0;
  }
`
const Second = styled.div`
  position: absolute;

  span {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    position: relative;
    border-radius: 50%;
    transform: rotateZ(${({value}) => value ? value : 0}deg);

    &:before {
      content: '';
      position: absolute;
      width: 2px;
      height: 50px;
      background-color: #885FFC;
      z-index: 7;
      border-radius: 3px 3px 0 0;
  }
`
const TimePrimarily = styled.div`
  text-align: center;
  font-size: 28px;
  color: #fff;

  span {
    font-size: 22px;
  }
`
const TimeSecondary = styled.div`
  text-align: center;
  font-size: 22px;
  color: #EBEBEB;
  padding: 0 0 36px;
`

const HourWidget = ({children, big, primarily, secondary, digPrimarily, am}) => {

  return (
    <Flex direction="column" justify="end">
      <Title>{children}</Title>

      <WidgetContainer size={big}>
        <Clock>
          <Hour value={digPrimarily.hour ? digPrimarily.hour * 30 : 20}>
            <span></span>
          </Hour>

          <Minute value={digPrimarily.minute ? digPrimarily.minute * 6 : 40}>
            <span></span>
          </Minute>

          <Second value={digPrimarily.second ? digPrimarily.second * 6 : 60}>
            <span></span>
          </Second>
        </Clock>
 
        <TimePrimarily>
          {primarily} 
          <span>{am ? " AM" : " PM"}</span>
        </TimePrimarily>
        <TimeSecondary>
          {secondary} {secondary ? "PM" : ""}
        </TimeSecondary>
        
      </WidgetContainer>
    </Flex>
  );
}

export default HourWidget;