export function writeOutput(el, text) {    
    el.style.color = 'red';
    el.innerHTML = text;
};

export function dateDiff(el, obj) {
    const {years, months, days} = obj;
    el.innerHTML = `year: ${years} month: ${months} day: ${days}`;
}