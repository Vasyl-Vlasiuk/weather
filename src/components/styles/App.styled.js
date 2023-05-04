import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1440px;
  max-width: 100%;
  height: 900px;
  padding: 0 20px;
  margin: 30px auto 0 auto;
`

export const Main = styled.div`
  position: relative;
  background: ${({ theme, index}) => theme.scheme[index].primary};
  min-width: 865px;
  padding: 62px 76px;
  border-right: 2px solid rgba(255, 255, 255, 0.3);
`

export const Aside = styled.div`
  position: relative;
  background: ${({ theme, index }) => theme.scheme[index].secondary};
  min-width: 575px;
  padding: 38px 44px 0 44px;
`