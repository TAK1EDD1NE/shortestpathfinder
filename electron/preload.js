const { contextBridge } = require('electron');

// Expose any APIs you want to make available to your renderer process here
contextBridge.exposeInMainWorld('electron', {
  // Functions and properties you want to expose
  platform: process.platform
});