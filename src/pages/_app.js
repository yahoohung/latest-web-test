import 'reset-css-complete/reset.css';
import { createGlobalStyle } from 'styled-components';
import AppContainer from '@/components/Context/container';

import { defaults } from 'react-sweet-state';

if (typeof window !== 'undefined') {
  defaults.devtools = true;
}

const GlobalStyle = createGlobalStyle`
  body {
    color: rgb(37, 37, 37);
    font-size: 16px;
    line-height: 1.61;
    font-family: "Microsoft JhengHei", "PingFang HK", "PingFang TC", sans-serif;
    width: 100%;
    font-weight: 400;
  }

  h1 {
    font-size: 1.5rem;
  }
`;

export default function MyApp({ Component, pageProps }) {
  return <AppContainer>
    <GlobalStyle />  
    <Component {...pageProps} />
  </AppContainer>
}
