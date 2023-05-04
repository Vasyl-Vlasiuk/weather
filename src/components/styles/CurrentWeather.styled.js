import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin: -40px 0px 40px;
  height: 520px;
`

export const Img = styled.img`
  width: 188px;
  height: 146px; 
  object-fit: contain;
`

export const Temperature = styled.div`
  font-size: 164px;
  font-weight: 100;
  text-shadow: -4px 3px 0.6px rgba(0, 0, 0, 0.1);
  margin: 0 0 17px;

  span {
    position: relative;
    top: -110px;
    font-size: 32px;
    font-weight: 400;
    text-shadow: -3px 2px 0.6px rgba(0, 0, 0, 0.1);
  }
`

export const Date = styled.div`
  font-size: 36px;
  font-weight: 300;
  text-shadow: -2px 2px 0.6px rgba(0, 0, 0, 0.1);
`

export const Day = styled.div`
  margin: 20px 0 38px;
  font-size: 24px;
  font-weight: 300;
  text-shadow: -2px 2px 0.6px rgba(0, 0, 0, 0.1);
`

export const Properties = styled.div`
  font-size: 24px;
  font-weight: 400;
  text-shadow: -2px 2px 0.6px rgba(0, 0, 0, 0.1);
`