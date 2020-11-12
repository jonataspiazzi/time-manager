import { app, ipcMain, BrowserWindow, Tray, Menu } from 'electron';
import path from 'path';
import fs from 'fs';
import isDev from 'electron-is-dev';

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });

  mainWindow.webContents.openDevTools();
  //mainWindow.maximize();

  mainWindow.loadURL(isDev
    ? `http://localhost:3000`
    : `file://${path.join(__dirname, '../public/index.html')}`);

  mainWindow.on('closed', () => {
    mainWindow = null
  });

  /*
  const tray = new Tray('public/favicon.ico');

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' }
  ]);

  tray.setContextMenu(contextMenu);
  tray.setToolTip('This is my application.');*/
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.handle('some-specific-action', (event, num) => {
  return fs.readdirSync('D:\\Documents').filter((value, index) => index < num);
});

ipcMain.handle('open-second-window', () => {
  createSecondWindow();
});

function createSecondWindow() {
  const window = new BrowserWindow({
    width: 300,
    height: 300,
    frame: false,
    transparent: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });

  //mainWindow.webContents.openDevTools();
  //mainWindow.maximize();

  window.loadURL(isDev
    ? `http://localhost:3000`
    : `file://${path.join(__dirname, '../public/index.html')}`);
}
