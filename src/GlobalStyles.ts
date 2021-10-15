import { createGlobalStyle } from "styled-components";

export const GloabStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
}
@media only screen and (min-width: 1440px)  {
    body{
        max-width: 1440px;
        margin: 0 auto;
    }
}
`;
