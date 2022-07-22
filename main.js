const {app, BrowserWindow} = require('electron');
// const path = require('path');
// const url = require('url');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile("./index.html");
  //win.loadURL(path.join(__dirname, 'index.html'));

  win.webContents.openDevTools();

  //win.on('closed', () => win.close());
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});