const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Get the primary display's work area size
  const { width, height } = require('electron').screen.getPrimaryDisplay().workAreaSize;

  const win = new BrowserWindow({
    width: width, // Full desktop width
    height: height, // Full desktop height
    resizable: false, // Prevent window resizing
    minimizable: true, // Enable minimize button
    maximizable: false, // Disable maximize button
    closable: true, // Enable close button
    frame: true, // Enable window frame (includes close and minimize buttons)
    movable: false, // Disable moving the window
    skipTaskbar: false, // Ensure the window appears in the taskbar
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.removeMenu(); // Remove the default menu bar
  win.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
