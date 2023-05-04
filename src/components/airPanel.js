import { useSelector } from 'react-redux';
import { useMemo } from "react";
import AirWidget from "./airWidget";

import Flex from "./styles/Flex.styled";

const AirPanel = () => {
  const { forecast }  = useSelector(state => state.weather);

  // I'm using random data as the Api doesn't provide me with the appropriate ones
  const { quality, index } = useMemo(() => ({
    quality: Math.floor(Math.random() * (4 - 1) + 1),
    index: Math.floor(Math.random() * (9 - 3) + 3),
  }), [forecast]); 

  return (
    <Flex justify="space-around" margin="60px 0 0 0">
      <AirWidget value={quality}>Air Quality</AirWidget>
      <AirWidget value={index}>UV Index</AirWidget>
    </Flex>
  );
}

export default AirPanel;