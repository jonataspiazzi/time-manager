import { app, BrowserWindow } from 'electron';
import path from 'path';
import isDev from 'electron-is-dev';

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  console.log('inside electron', __dirname);

  mainWindow.loadURL(isDev
    ? `http://localhost:3000`
    : `file://${path.join(__dirname, '../public/index.html')}`);

  mainWindow.on('closed', () => {
    mainWindow = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
})