const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    show: false,
    webPrefrences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  win.maximize();
  win.show();
  win.loadFile('index.html')


}

app.whenReady().then(() => {
  createWindow()
})

function ColourSwitch() {
  document.body.classList.toggle("DarkScheme");
}  