import { useState } from "react";
import styled from "styled-components";

const PromptContainer = styled.div`
  position: absolute;
  width: 490px;
  height: 205px;
  z-index: 10;
  margin: 30px 0 0 0;
  padding: 20px;
  border-radius: 25px;
  background: #fff;
  text-shadow: none;
  color: rgba(0, 0, 0, 0.8);
  font-style: italic;
  font-size: 16px;
  font-weight: 400;
`
const Circle = styled.div`
  position: relative;
  text-align: center;
  width: 40px;
  height: 40px;
  margin: -25px 0 0 auto;
  padding: 2px 4px 0 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.23);
  color: #fff;
  font-style: italic;
  font-weight: 400;
  cursor: pointer;
`

const Prompt = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <hr style={{"width":"90%"}}/>
      <Circle
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        i
      </Circle>

      {isHovering &&  
        <PromptContainer>
          <b>Golden hour</b> is a time when the Sun is just about to rise or set and the angle between rays and the surface is about 10 degrees. The light goes almost horizontally, and it has to penetrate thick layers of air, which makes it diffuse.
          <br/>
          <br/>
          <b>Air quality</b> is a measure of how clean or polluted the air is. Monitoring air quality is important because polluted air can be bad for our health—and the health of the environment.
        </PromptContainer>}
    </>
  );
}

export default Prompt;