import React from 'react';
import Router from './routes/Router';
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};    
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`
// 전역 스타일 적용
 
function App() {
  return (
    <>
      <GlobalStyle/>
      <Router/>
    </>
 
  );
}

export default App;
