import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFF;
    -webkit-font-smothing: antialiased;
  }
  body, input, button {
    font-family: 'Montserrat', sans-serif;
  }

  #root {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 300px 180px;
  }

  button {
    cursor: pointer;
  }

`;
