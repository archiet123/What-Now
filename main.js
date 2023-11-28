const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({ show: false })
  win.maximize();
  win.show();
  win.loadFile('index.html')

  WebPrefrences: {
    preload: path.join(__dirname, 'preload.js')
  }
}

app.whenReady().then(() => {
  createWindow()
})

function ColourSwitch() {
  document.body.classList.toggle("DarkScheme");
}  