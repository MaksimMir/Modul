const sound = new Audio();
sound.src = `./sound/c7b68d9df6de3c5.mp3`;
sound.addEventListener('canplaythrough', {once: true});

export default sound;