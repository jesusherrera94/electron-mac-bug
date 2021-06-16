const { app, BrowserWindow } = require('electron');
const path = require('path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    title:"Parent window",
    fullscreen: true,
    frame: true,
    alwaysOnTop: true,
    show: false,
  })
  const childWindow = new BrowserWindow({
    parent: mainWindow,
    width: 300,
    height: 300,
    movable: true,
    frame: true,
    closable: false,
    fullscreen: false,
    fullscreenable: false,
    maximizable: false,
  });

  mainWindow.loadURL('https://www.google.com/');
  childWindow.loadFile('child.html');
  mainWindow.show();
  childWindow.show();

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
