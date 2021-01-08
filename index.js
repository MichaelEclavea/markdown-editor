const { app, BrowserWindow, Menu, shell } = require('electron');
const menu = require('./menu');


let window;

app.on("window-all-closed", function(){
    app.quit();
});

app.on('ready', () =>{
    window = new BrowserWindow({
        width: 800,
        height: 600,
        "min-height": "600",
        "min-width": "800",
        icon:'path/to/icon.png',
        webPreferences: {
            nodeIntegration: true
        }
    });
    
    window.loadFile('index.html');
    
})

var template = [{
    label: "Application",
    submenu: [
        { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
        { type: "separator" },
        { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
    ]}, {
    label: "Edit",
    submenu: [
        { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
        { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
        { type: "separator" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
        { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
        { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
    ]}, {
        label: "Github",
        submenu: [
            { label: "Github", click(){shell.openExternal('https://github.com/MichaelEclavea/markdown-editor');}}
        ]
    }
];

Menu.setApplicationMenu(Menu.buildFromTemplate(template));
// });

// Menu.setApplicationMenu(menu);