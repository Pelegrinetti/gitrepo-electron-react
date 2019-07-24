const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
  let window = new BrowserWindow({
    width: 800,
    height: 400,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + '/preload.js'
    }
  })

  window.loadURL('http://localhost:3000')
  
  window.on('close', () => {
    window = null;
  })
  
})