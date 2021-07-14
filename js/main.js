import { writeOutput, dateDiff } from './modules/output.js';
import calcData from './modules/luxon.js';
import taber from './modules/tabs.js';
import timer from './modules/timer.js';

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


