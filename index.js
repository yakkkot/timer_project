const minutesText = document.getElementsByTagName('h1')[0];
const secondsText = document.getElementsByTagName('h1')[1];
const millisecondsText = document.getElementsByTagName('h1')[2];

const startButton = document.getElementsByTagName('a')[0];
const lapButton = document.getElementsByTagName('a')[1];
const stopButton = document.getElementsByTagName('a')[2];
const restartButton = document.getElementsByTagName('a')[3];
const clearButton = document.getElementsByTagName('a')[4];

const divForLap = document.getElementById('laps');

let ms = 0, second = 0, min = 0, hour = 0, interval;

startButton.addEventListener('click', () => {
    interval = setInterval(startTimer, 10);
});

stopButton.addEventListener('click',()=>{
    clearInterval(interval)
})

lapButton.addEventListener('click',()=>{
    const h3 = document.createElement('h3');
    h3.innerText = lap();
    divForLap.appendChild(h3);
})

restartButton.addEventListener('click',()=>{
    clearInterval(interval)
    ms = 0;
    second = 0;
    min = 0;
    hour = 0;
    minutesText.innerText = `00 :`;
    secondsText.innerText = `00 :`;
    millisecondsText.innerText = `00`;
})

clearButton.addEventListener('click',()=>{
    divForLap.innerHTML = '';
})

function lap (){
    let [min, seconds, ms] = startTimer(0);
    let minText, secText, msText;
    if(min<=9){
        minText = '0' + min;
    }
    else{
        minText = min;
    }
    if(seconds<=9){
        secText = '0' + seconds;
    }
    else{
        secText = seconds;
    }
    if(ms<=9){
        msText = '0' + ms;
    }
    else{
        msText = ms;
    }
    return `${minText} : ${secText} : ${msText}`
}
function startTimer (i=1){
    ms+=i;
    if (ms<=9){
        millisecondsText.innerText = ' '+ '0' + ms;
    }
    if(ms>9 && ms<=98) {
        millisecondsText.innerText = ` ${ms}`;
    }
    if(ms>99){
        second++
        ms = 0;
    }
    //SEC
    if(second<=9){
        secondsText.innerText = ' '+ '0'+ second +' :';
    }
    if(second >= 10 && second<60){
        secondsText.innerText = ` ${second} :`;
    }
    if(second>=60){
        min++
        second = 0;
    }
    // MIN
    if(min<=9){
        minutesText.innerText = `0${min} :`;
    }
    if (min >= 10 && min < 60) {

        minutesText.innerText = `${min} :`;
    }
    if(min>=60) {
        hour++
        min=0
    }
    return [min,second,ms]
    }


