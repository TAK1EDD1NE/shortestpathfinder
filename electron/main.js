// const { app, BrowserWindow } = require('electron');
// const path = require('path');
// const url = require('url');
import { app, BrowserWindow } from 'electron'
import path from 'path'
import url from 'url'

// Get the correct __dirname in ES module context
const __dirname = path.resolve(path.dirname(''));

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'electron', 'preload.js')
    }
  });

  // For development
  if (process.env.ELECTRON_START_URL) {
    // Intercept requests to set the correct MIME type
    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
      callback({
        responseHeaders: {
          ...details.responseHeaders,
          'Content-Type': 'text/javascript'
        }
      });
    });
    
    mainWindow.loadURL(process.env.ELECTRON_START_URL);
  } else {
    // For production
    mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));
  }

  // Open DevTools for debugging
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  if (mainWindow === null) createWindow();
});