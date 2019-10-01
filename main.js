const { app, BrowserWindow, Menu } = require('electron')
const { ipcMain } = require('electron')



let mainWindow;
app.on('ready', function () {

    createWindow(1000, 800)
    const fs = require('fs')
    const root = fs.readdirSync('/')

})
ipcMain.on('ouvrir-fenetre', e => {
    createWindow(800, 600)
    e.sender.send('ouvrir-fenetre-fait')
})
const menu = Menu.buildFromTemplate([

    {
        label: 'Affichage',
        submenu: [
            {
                label: 'Zoom',
                submenu: [
                    {
                        label: 'Zoom avant',
                        click: () => {
                            const contents = mainWindow.webContents;
                            const level = contents.getZoomLevel();
                            contents.setZoomLevel(level + 1);
                        }
                    },
                    {
                        label: 'Zoom arrière',
                        click: () => {
                            const contents = mainWindow.webContents;
                            const level = contents.getZoomLevel();
                            contents.setZoomLevel(level - 1);
                        }
                    }
                ]
            },
            {
                type : "separator"
            },
            {
                label: 'Quitter',
                click : () =>{
                    app.quit()
                }
            }
        ]


    }
])
Menu.setApplicationMenu(menu)

function createWindow(width, height) {
    mainWindow = new BrowserWindow({
        width: width,
        height: height,
        title: 'DEV WAY2CALL',
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.webContents.openDevTools()
    mainWindow.loadFile('./windows/index.html')
    mainWindow.on('closed', () => {
        mainWindow = null
    })
}
