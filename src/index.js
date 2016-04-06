'use strict'

import {app, BrowserWindow} from 'electron'
import {join} from 'path'

const BASE_DIR = join(__dirname, '../')
const HTML_DIR = join(BASE_DIR, 'web')

let mainWindow

app.on('window-all-closed', () => {
  app.quit()
})

app.on('ready', async () => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600
  })

  mainWindow.loadURL(`file://${join(HTML_DIR, 'index.html')}`)

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', async () => {
    mainWindow = null
  })
})
