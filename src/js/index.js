import Controller from "./controller.js"


function addEventHandlers() {
    // Put the element on the page with an id of start in a variable
    // Do the same for the stop button and the reset button

    let controls = document.getElementById("controls");
    controls.addEventListener("click", handleEvent);


}

function init(){
    Controller.createTimer();
    addEventHandlers();
}

function handleEvent(e) {
    //deturmine if what btn the user pressed
    let target = e.target;
    let action = target.dataset.action;
    //let method = action + "Timer";
    //this[method]()
    if (action == "start") {
        Controller.startTimer();
        addEventHandlers();
    }
    if (action == "stop") {
        Controller.stopTimer();
        addEventHandlers();
    }
    if (action == "reset") {
        //timer.stop();
        Controller.resetTimer();
        addEventHandlers();
    }
    
}
init();
