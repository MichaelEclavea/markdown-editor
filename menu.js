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
        label: 'Fuck-Off',
        submenu: [
            {
                label: 'Fuck-You',
                click(){
                    shell.openExternal('https://www.google.com/search?source=hp&ei=5l_rX7T1EdKr0PEPlcWgoAE&iflsig=AINFCbYAAAAAX-tt9vN5PLMwhz1fQQUsq3XozgzHN0s7&q=fuckyou&oq=fuckyou&gs_lcp=CgZwc3ktYWIQAzoICAAQsQMQgwE6CAguEMcBEKMCOgIIADoOCC4QsQMQgwEQxwEQowI6BQguELEDOgUIABCxAzoICC4QsQMQkwJQnQ1Y2BRgkhdoAHAAeACAAfkCiAH7CZIBBzIuMy4xLjGYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwi0gL_A1PPtAhXSFTQIHZUiCBQQ4dUDCAo&uact=5');
                }
            }
        ]
    }

];

const menu = Menu.buildFromTemplate(template);

module.exports = menu;