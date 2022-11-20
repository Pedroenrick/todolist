import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #191818;
    color: #FFF;
    line-height: 1.4;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
  }

  a, button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
