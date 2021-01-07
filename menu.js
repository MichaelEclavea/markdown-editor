const { Menu, shell } = require('electron');

const template = [
    {
        role: 'help', 
        submenu: [
            {
                label: 'About Editor Component',
                click() {
                    shell.openExternal('https://simplemde.com/');
                }
            }
        ]
    },
    {
        label: 'Debugging',
        submenu: [
            {
                role: 'toggleDevTools'
            }
        ]
    }, 
    {
        label: 'Code',
        submenu: [
            {
                label: 'Code',
                click(){
                    shell.openExternal('https://github.com/MichaelEclavea/markdown-editor');
                }
            }
        ]
    }

];

const menu = Menu.buildFromTemplate(template);

module.exports = menu;