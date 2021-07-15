import audio from './audio.js'



export default () => {
    const startBtn = document.querySelector('.start');
    const stopBtn = document.querySelector('.stop');
    let timer;

    startBtn.addEventListener('click', () => {
        let time = document.querySelector('#time');
        const getTime = document.querySelector('.time');

        timer = setInterval(() => {
            getTime.innerHTML = time.value--;
            time.style.display = 'none';

            if (time.value < 0) {
                clearInterval(timer);
                audio.play();
                time.value = '';
                time.style.display = 'block';
            }      
        }, 1000);
    });

    stopBtn.addEventListener('click', () => {
        clearInterval(timer);
    });
}