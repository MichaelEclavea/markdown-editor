'use strict'

// -------- THEME NAME & THEME COLOR FUNCTION ------ //

function changeThemeName() {
  let themeName = document.getElementById('theme-name')
  let slider = document.getElementById('slider')
  let theme = document.getElementById('theme')

  slider.addEventListener('click', function (e) {
    if (themeName.innerHTML === 'LightTheme') {
      themeName.innerHTML = 'DarkTheme'
      theme.innerHTML = ` .CodeMirror {flex: 1;caret-color: white;background-color: rgb(35, 34, 34);color: #9ad9f4} body {background-color: black; color: #9ad9f4;} h1 {color: #9ad9f4;}.editor-preview-side {background-color: rgb(58, 58, 58);color: #9ad9f4;}`
    } else {
      themeName.innerHTML = 'LightTheme'
      theme.innerHTML = ` .CodeMirror {flex: 1;background-color: #fafafa;color: black;}`
    }
  })
}

//----------- STOPS FROM HOLDING KEYDOWN ----------//
let down = false

document.addEventListener('keyup', function () {
    down = false;
  }, false);

//-------------- AUDIO FUNCTION ------------ //

function renderAudio() {
  let audioSlider = document.getElementById('audio-slider')
  let audioName = document.getElementById('audio-name')


  audioSlider.addEventListener('click', function (e) {
    if (audioName.innerHTML === 'Audio') {
      audioName.innerHTML = 'Muted';
      $(document.documentElement).off('keydown');
      return audioName.style.textDecoration = 'line-through';
    } else {
      if(audioName.innerHTML === 'Muted' || audioName.innerHTML === 'Play Audio'){
        audioName.innerHTML = 'Audio';
        audioName.style.textDecoration = 'none';
        $(document.documentElement).keydown(function (event) {
          console.log(event.key)
          if(down) return;
          if (event.key === '.' || event.key === 'Tab'){
            
            let audio = new Audio('./audio/period.m4a');
            down = true;
            return audio.play();
          } 
          if(event.key === 'Enter') {
            let audio = new Audio('./audio/enter.m4a');
            down = true;
            return audio.play();
          } else {
              let i = Math.floor(Math.random() * (4 - 1) + 1);
              let audio = new Audio(`./audio/${i}.m4a`);
              down = true;
              return audio.play();
          }
        });
      }
    };

  });
};

// --------- FUNCTION CALLS --------- //
changeThemeName()
renderAudio()
