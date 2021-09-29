// var audio = document.createElement('audio');
// audio.setAttribute('src', 'sound.mp3'); 
// audio.loop=true;
// // audio.play();
const playAudio = async () => {
    try {
      var audio = new Audio("sound.mp3");
      audio.loop = true;
      await audio.play();
    } catch (e) {
      console.log();
    }
  };
  
  // play the audio whenever the arrow key is pressed
  window.addEventListener("keydown", function (event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  
    switch (key) {
      case "ArrowLeft":
        playAudio();
        break;
      case "ArrowRight":
        playAudio();
        break;
      case "ArrowUp":
        playAudio();
        break;
      case "ArrowDown":
        playAudio();
        break;
    }
  });