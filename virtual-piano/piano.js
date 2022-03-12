  
  const keyNote = document.querySelector('.btn-notes');
  const keyLetter = document.querySelector('.btn-letters');

// Create function playAudio;
  const  playAudio = (src) => {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }

  window.addEventListener('keydown', function(e) {
    if(!e.repeat){
          const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
          const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
         if(!audio) return; // Stop the function from running all together 
        audio.currentTime = 0; // Rewind to the start
         audio.play();
         key.classList.add('playing');
    }     
 });

    function removeTransition(e){
      if (e.propertyName !== 'transform') return;
      this.classList.remove('playing');
    }

    // 
const piano1 = document.querySelectorAll('.piano-key');
piano1.forEach(key => key.addEventListener('transitionend', removeTransition));




    const piano = document.querySelector('.piano');
    const pianoКeys = document.querySelectorAll('.piano-key')   
    const startSound = (event) => {
    event.target.classList.add('piano-key-active')
    event.target.classList.add('piano-key-active-pseudo')
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);
  }
  
  
  const stopSound = (event) => {
    event.target.classList.remove('piano-key-active')
    event.target.classList.remove('piano-key-active-pseudo')
    event.target.classList.add('piano-key-remove-mouse')
  }
  
  
  piano.addEventListener('mousedown', (event) => {
    if(event.target.classList.contains('piano-key')) {
      event.target.classList.add('piano-key-active')
      event.target.classList.add('piano-key-active-pseudo')
      const note = event.target.dataset.note;
      const src = `assets/audio/${note}.mp3`;
      playAudio(src);
      pianoКeys.forEach(element => {
        element.addEventListener('mouseover', startSound )
        element.addEventListener('mouseout', stopSound)
      }) 
    }
  });
  // Cross Letters & Notes
  
  piano.addEventListener('mouseup', (event) => {
    if(event.target.classList.contains('piano-key') ) {
      event.target.classList.remove('piano-key-active')
      event.target.classList.remove('piano-key-active-pseudo')
      event.target.classList.add('piano-key-remove-mouse')
      pianoКeys.forEach(element => {
        element.removeEventListener('mouseover', startSound )
        element.removeEventListener('mouseout', stopSound)
      });
    };
  });

  const onBtnNoteClick =  () => {
    keyNote.classList.add('btn-active')
    keyLetter.classList.remove('btn-active')
    pianoКeys.forEach(item => {
      item.classList.remove('piano-key-letter')
    })
  }
  
  
  const onBtnLetterClick = () => {
    keyLetter.classList.add('btn-active')
    keyNote.classList.remove('btn-active')
    pianoКeys.forEach(item => {
      item.classList.add('piano-key-letter')
    })
  }
  
  keyNote.addEventListener('click', onBtnNoteClick );
  keyLetter.addEventListener('click',  onBtnLetterClick);

// FullScreen API
  function fullScreen(){
    var el = document.getElementById('msg');
    if (el.webktitRequestFullscreen) el.webktitRequestFullscreen();
    else if (el.mozRequestFullscreen) el.mozRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
    else if (el.requestFullscreen) el.requestFullscreen();

  };

 
