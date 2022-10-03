import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Kumbh Sans', sans-serif;
  }

  body {
    background-color: hsl(223, 64%, 98%);
  }

  @media only screen and (min-width: 1921px) {
    body{
        max-width: 1920px;
        margin: 0 auto;
        position: relative;
    }
  }
`;
