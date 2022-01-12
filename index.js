const { app, BrowserWindow } = require('electron')

app.whenReady().then(()=>{

	mainWindow = new BrowserWindow({
		width: 1100,
		height: 800,
		
		webPreferences: {
			nodeIntegration: true,
		},

	})
	mainWindow.loadFile('index.html')

})
6