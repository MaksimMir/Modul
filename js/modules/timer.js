const startBtn = document.querySelector('.start');

let sounds = new Audio();
sounds.src = `../../sound/c7b68d9df6de3c5.mp3`;
sounds.addEventListener('canplaythrough', {once: true});


export default () => {

    startBtn.addEventListener('click', () => {
        let time = document.querySelector('#time').value;
        const getTime = document.querySelector('.time');
        
        let timer = setInterval(() => {
            getTime.innerHTML = time;
            time--; 
            if (time < 0) {
                clearInterval(timer);
                sounds.play();
            }          
        }, 1000);
    });
}