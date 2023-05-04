import styled from "styled-components";

const DeviderStyled = styled.span`
  display: inline-flex;
  align-self: center;
  height: 20px;
  width: 1px;
  margin: 0 ${(props) => props.gap || "22px"};
  background-color: #fff;
`
export default DeviderStyled;