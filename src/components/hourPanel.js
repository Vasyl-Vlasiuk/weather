import { useSelector } from 'react-redux';
import HourWidget from './hourWidget';
import Prompt from "./prompt";

import Flex from "./styles/Flex.styled";

const HourPanel = () => {
  const { sunrise, sunset, sunriseTimestamp, sunsetTimestamp } = useSelector(state => state.weather.current);

  function getGoldenTime(period) {
    const diff = (sunsetTimestamp - sunriseTimestamp); 
    const ratio = diff * (period === "morning" ? 0.1 : 0.9);
    const time = new Date((sunriseTimestamp + ratio) * 1000).toLocaleTimeString();

    return time.split(':', 2).map(((item) => item)).join(':')
  }

  function getGoldenTimestamp() {
    const diff = (sunsetTimestamp - sunriseTimestamp); 
    return sunriseTimestamp + diff * 0.1;
  }
  
  function digitalFormat(timestamps) {
    const time = new Date(timestamps  * 1000).toLocaleTimeString('it-IT').split(':').map(item => +item);

    return {
      hour: time[0],
      minute: time[1],
      Second: time[2]
    }
  }

  return (
    <>
      <Flex justify='space-evenly' margin="80px 0 50px">
        <HourWidget 
          primarily={sunrise}
          digPrimarily={digitalFormat(sunriseTimestamp)}
          am={true}
        >
          Sunrise
        </HourWidget>
        
        <HourWidget 
          big="true"
          primarily={getGoldenTime('morning')}
          secondary={getGoldenTime('evening')}
          digPrimarily={digitalFormat(getGoldenTimestamp())}
          am={true}
        >
          Golden Hour
        </HourWidget>

        <HourWidget 
          primarily={sunset}
          digPrimarily={digitalFormat(sunsetTimestamp)}
        >
          Sunset
        </HourWidget>
      </Flex>
      
      <Prompt/>
    </>
  );
}

export default HourPanel;