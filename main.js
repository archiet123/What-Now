const { app, BrowserWindow } = require('electron');
const path = require('node:path');

const createWindow = () => {
  const win = new BrowserWindow({
    show: false,
    webPreferences: {
      // nodeIntegration: true,
      // contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.maximize();
  win.show();
  win.loadFile('index.html')


}

app.whenReady().then(() => {
  createWindow()
})

