'use strict'

import {app, BrowserWindow} from 'electron'
import {join} from 'path'

let mainWindow

app.on('window-all-closed', () => {
  app.quit()
})

app.on('ready', async () => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600
  })

  mainWindow.loadURL(`file://${join(__dirname, 'index.html')}`)

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', async () => {
    mainWindow = null
  })
})
