import moment from 'moment';

import { useSelector } from 'react-redux';
import HourWidget from './hourWidget';
import Prompt from "./prompt";

import Flex from "./styles/Flex.styled";

const HourPanel = () => {
  const { sunrise, sunset, sunriseTimestamp, sunsetTimestamp } = useSelector(state => state.weather.current);

  function getGoldenTime(period) {
    const diff = (sunsetTimestamp - sunriseTimestamp); 
    const ratio = diff * (period === "morning" ? 0.1 : 0.9);

    return moment((sunriseTimestamp + ratio) * 1000).format('LT')
  }

  function getGoldenTimestamp() {
    const diff = (sunsetTimestamp - sunriseTimestamp); 
    return (sunriseTimestamp + diff) * 0.1 * 1000;
  }

  return (
    <>
      <Flex justify='space-evenly' margin="80px 0 50px">
        <HourWidget 
          primarily={sunrise}
          hours ={+moment(sunriseTimestamp  * 1000).format('h')}
          minutes ={+moment(sunriseTimestamp  * 1000).format('m')}
          seconds ={+moment(sunriseTimestamp  * 1000).format('s')}
        >
          Sunrise
        </HourWidget>
        
        <HourWidget 
          big="true"
          primarily={getGoldenTime('morning')}
          secondary={getGoldenTime('evening')}
          hours = {+moment(getGoldenTimestamp()).format('h')}
          minutes = {+moment(getGoldenTimestamp()).format('m')}
          seconds = {+moment(getGoldenTimestamp()).format('s')}
        >
          Golden Hour
        </HourWidget>

        <HourWidget 
          primarily={sunset}
          hours = {+moment(sunsetTimestamp  * 1000).format('h')}
          minutes = {+moment(sunsetTimestamp  * 1000).format('m')}
          seconds = {+moment(sunsetTimestamp  * 1000).format('s')}
        >
          Sunset
        </HourWidget>
      </Flex>
      
      <Prompt/>
    </>
  );
}

export default HourPanel;