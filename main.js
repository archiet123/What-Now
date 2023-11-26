const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({ show: false })
  win.maximize();
  win.show();
  win.loadURL('https://github.com')

  const contents = win.webContents
  console.log(contents)
  // win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})