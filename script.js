let deg =6;
const sc = document.querySelector('#sc');
const mn = document.querySelector('#mn');
const hr = document.querySelector('#hr');

setInterval(()=> {
const day = new Date;
const hh = day.getHours()*30;
const mm = day.getMinutes()*deg;
const ss = day.getSeconds()*deg;

hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
});

