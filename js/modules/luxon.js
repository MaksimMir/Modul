import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.min.js';

export default (date1, date2) => {
    if (date1 < date2) {
        [date2, date1] = [date1, date2];
    }
    const dateFrom = DateTime.fromISO(date1);
    const dateTo = DateTime.fromISO(date2);

    return dateFrom.diff(dateTo, ['years', 'months', 'days']).toObject();
}