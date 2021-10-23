import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 375px;
    --paleBlue: hsl(225, 100%, 94%);
    --brightBlue: hsl(245, 75%, 52%);
    --veryPaleBlue: hsl(225, 100%, 98%);
    --desaturatedBlue: hsl(224, 23%, 55%);
    --darkBlue: hsl(223, 47%, 23%);
    --fontLight: 500;
    --fontMed: 700;
    --fontHeavy: 900;
 ;
  }

  * {
    box-sizing: border-box;
    font-family: 'Red Hat Display', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;

    p {
      font-size: 16px;
    }
  }

  .home {
    background: var(--paleBlue);
    border-radius: 15px;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: var(--paleBlue);
    border-radius: 15px;
  }

  .cancel {
    text-decoration: none;
    color: black;
    margin: 20px auto;
  }

  @media screen and (max-width: 1440px)

`;
