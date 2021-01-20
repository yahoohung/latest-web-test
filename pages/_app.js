import 'reset-css-complete/reset.css';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
  }

  h1 {
    font-size: 1.5rem;
  }
`;

export default function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyle />  
    <Component {...pageProps} />
  </>
}