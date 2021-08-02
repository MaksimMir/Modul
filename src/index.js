import { writeOutput, dateDiff } from './js/modules/output.js';
import calcData from './js/modules/luxon.js';
import taber from './js/modules/tabs.js';
import timer from './js/modules/timer.js';
import './image/logo2.jpeg';
import './sound/c7b68d9df6de3c5.mp3';
import './style.css';


window.addEventListener('load', () => {
    'use strict';

    const form = document.querySelector('#calc');
    const res = document.querySelector('.result');

    form.addEventListener('submit', evt => {
        evt.preventDefault();
        res.innerHTML = '';
                
        const dateFrom = document.querySelector('#date-from').value;
        const dateTo = document.querySelector('#date-to').value;

        if (!dateFrom || !dateTo) {
            writeOutput(res, 'Необходимо установить дату');
        } else {
            dateDiff(res, calcData(dateFrom, dateTo));
        }
    });

    taber();

    timer();
})


