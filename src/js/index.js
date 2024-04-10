/** @jsx vNode */
import Timer from '../../dev_modules/@ocdla/timer/timer.js';
import * as TimerHtml from '../../dev_modules/@ocdla/timer/timerHTML.js';

 

createTimer();
let timer;
const methodsnames = ["reset", "stop"];

function createTimer() {
    document.getElementById("timer").innerHTML = generateHTML();
    addEventHandlers();
}
function generateHTML() {
    let HTML = TimerHtml.generateHeader()
    HTML += TimerHtml.generateTimerBtn("start");
    HTML += TimerHtml.generatefooter();
    return HTML;
}
function generateInitialHTML() {
    let HTML = TimerHtml.generateCountDownHTML();
    for(let i = 0; i < methodsnames.length; i++) {
        HTML += TimerHtml.generateTimerBtn(methodsnames[i]);
    }
    HTML += TimerHtml.generatefooter();
    return HTML;
}


function addEventHandlers() {
    // Put the element on the page with an id of start in a variable
    // Do the same for the stop button and the reset button
   
    let controls = document.getElementById("controls");
    controls.addEventListener("click", handleEvent);
    

}
function handleEvent(e){
    //deturmine if what btn the user pressed
    let target = e.target;
    let action = target.dataset.action;
    //let method = action + "Timer";
    if (action == "start"){
        startTimer();
    }
    if (action == "stop"){
        timer.stop();
    }
    if (action == "reset"){
        timer.stop();
        resetTimer();
    }
}
function resetTimer(){
    createTimer(); 
}
function startTimer() {
    setTimer();
   
}
function setTimer(){
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let cal = Timer.calcTimer(parseInt(hours.value), parseInt(minutes.value), parseInt(seconds.value));
    
    timer = new Timer(cal);

  
    timer.start();
    document.getElementById("timer").innerHTML = generateInitialHTML();
    addEventHandlers();
  
}
