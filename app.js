'use strict';


// -------- THEME NAME & THEME COLOR FUNCTION ------ //

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

//----------- STOPS FROM HOLDING KEYDOWN ----------//
let down = false;

document.addEventListener('keyup', function () {

  down = false;
}, false);


//-------------- AUDIO FUNCTION ------------ //

function renderAudio() {
    let audioSlider = document.getElementById('audio-slider');
    let audioName = document.getElementById('audio-name');

    audioSlider.addEventListener('click', function(e) {
        if(audioName.innerHTML === 'Audio'){
            console.log('inside audio supposed to stop!')
            audioName.innerHTML = 'Muted';
            audioName.style.textDecoration = 'line-through';
            $(document.documentElement).off('keydown');
            $(document.documentElement).off('keypress');
            return;
        }
        if(audioName.innerHTML === 'Play Audio' || audioName.innerHTML === 'Muted'){
            audioName.innerHTML = 'Audio';
            console.log('in else statement')
            audioName.style.textDecoration = 'none';
            document.addEventListener('keypress', function(event) {
                if(down) return;
                document.addEventListener('keydown', function(e) {
                  if(down) return;
                    if(e.key === 'Enter'){
                      let audio = new Audio('./audio/enter.m4a');
                      down = true;
                      console.log('enter', e.key);
                      return audio.play();
                    }
                })
              if (event.key === '.' || event.key === 'Tab'){       
                let audio = new Audio('./audio/period.m4a');
                down = true;
                return audio.play();
              } 
              else { 
                  let i = Math.floor(Math.random() * 4) + 1; 
                  let audio = new Audio(`./audio/${i}.m4a`);
                  console.log(i, event.key);
                  audio.playbackRate = 2;
                  down = true;
                  return audio.play();
              }
            })
        }
    })
  };

  

// --------- FUNCTION CALLS --------- //
changeThemeName();
renderAudio();