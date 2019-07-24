import React from 'react';
import { FaTimes, FaWindowMinimize } from 'react-icons/fa'

import { Container, Content, Button, WindowTitle } from './styles';

export default function TopBar() {
  function handleCloseWindow () {
    window.remote.app.quit()
  }

  function handleMinimizeWindow () {
    window.remote.BrowserWindow.getFocusedWindow().minimize();
  }

  return (
    <Container>
      <Content>
        <WindowTitle>GitRepo</WindowTitle>
      </Content>
      <Content>
        <Button close={false} onClick={handleMinimizeWindow}><FaWindowMinimize color="#fff" size={10} /></Button>
        <Button close={true} onClick={handleCloseWindow}><FaTimes color="#fff" /></Button>
      </Content>
    </Container>
  );
}
