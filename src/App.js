import React from 'react';

import { GlobalStyle } from './styles/globalStyle';
import TopBar from './components/TopBar';

import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <TopBar />
      <Home />
    </>
  );
}

export default App;
