'use strict';


// -------- THEME NAME FUNCTION ------ //

function changeThemeName(){
    let themeName = document.getElementById('theme-name');
    let slider = document.getElementById('slider');
    let theme = document.getElementById('theme');
    

    slider.addEventListener('click', function(e) {
        if(themeName.innerHTML === 'LightTheme'){
            themeName.innerHTML = 'DarkTheme';
            theme.innerHTML = ` .CodeMirror {flex: 1;caret-color: white;background-color: rgb(35, 34, 34);color: #9ad9f4} body {background-color: black; color: #9ad9f4;} h1 {color: #9ad9f4;}.editor-preview-side {background-color: rgb(58, 58, 58);color: #9ad9f4;}`;
        } 
        else {
            themeName.innerHTML = 'LightTheme';
            theme.innerHTML = ` .CodeMirror {flex: 1;background-color: #fafafa;color: black;}`;
        }
           
    })
}
// .editor-preview-side {background-color: rgb(58, 58, 58); color: white;}



// --------- FUNCTION CALLS --------- //
changeThemeName();
