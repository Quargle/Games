
  function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) return; //stop the function from running 
    audio.currentTime = 0; // resets audio to start if it is already playing
    audio.play();
    key.classList.add('playing');
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip events other than the transform 
    e.target.classList.remove('playing');
  };
  
  window.addEventListener('keydown', playSound);

  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
