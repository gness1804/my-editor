import { app, BrowserWindow } from 'electron';

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
})
