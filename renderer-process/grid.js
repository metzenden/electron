const { ipcRenderer } = require('electron')

$('#ouvrir-fenetre').click(function () {
    ipcRenderer.send('ouvrir-fenetre');
    ipcRenderer.on('ouvrir-fenetre-fait', e => {
        console.log(e)
    });
})

