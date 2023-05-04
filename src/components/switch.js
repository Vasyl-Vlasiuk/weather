import { useDispatch} from 'react-redux';
import { changeUnit } from '../redux/actions';

import styled from "styled-components";

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 120px;
  font-weight: 400;
  font-size: 24px;
`
const Switcher = styled.input`
  margin: 0 -33px;
  -webkit-appearance: none;
  position: relative;
  width: 90px;
  height: 40px;
  border-radius: 25px;
  background-color: #ffffff29;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  transition: background 0.3s ;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 27%;
    transform: translate(-50%, -50%);
    border-radius: 25px;
    height: 40px;
    width: 50px;
    background-color: #ffffff38;
    transition: left 0.3s;
  }

  &:checked::after {
    left: 73%
  }
`

const Switch = () => {
  const dispatch = useDispatch();
  
  const onChangeUnits = () => {
    dispatch(changeUnit());
  }

  return (
    <SwitchContainer >
      C
      <Switcher type="checkbox" onChange={onChangeUnits}/>
      F
    </SwitchContainer>
  );
}

export default Switch;