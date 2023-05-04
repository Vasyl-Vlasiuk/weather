import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter';
  }
  body {
    font-weight: 300;
    font-size: 28px;
    color: #fff;
  }
  img {
    max-width: 100%;
  }

  .swiper {
    position: static;
    cursor: grab;
  }
  .swiper-button-next {
    right: -100px;
    color: #fff;
    font-size: 28px;
    padding: 15px;
  }
  .swiper-button-prev {
    display: none;
  }
  :root {
    --swiper-navigation-size: 28px;
    text-shadow: -2px 2px 0.6px rgba(0, 0, 0, 0.1);
  }
`

export default GlobalStyles