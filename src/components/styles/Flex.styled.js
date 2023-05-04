import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'stretch'};
  align-items: ${props => props.items || 'stretch'};
  margin: ${({margin}) => margin || '0'};
`
export default StyledFlex;