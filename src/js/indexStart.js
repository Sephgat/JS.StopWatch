import * as timer from '../../dev_modules/@ocdla/foobar/foobar';

class Timer {
    static methodsnames = ["start", "decrease", "reset", "stop"]
    constructor() {
        
        this.isRunning = false;
        this.isIncementing = false;
        this.isDecrementing = false;
        this.timer = null;
        this.elapsedTime = 0;

        this.createTimer = this.createTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.updateTimer = this.updateTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        document.getElementById("addtimer").onclick = this.createTimer.bind(this);
        timer.incrementTimer()
        
    }
    createTimer() {
        document.getElementById("timer").innerHTML = this.generateHTML()
        this.addEventHandlers()
    }
    generateHTML() {
        let HTML = this.generateHeader()
        for(let i = 0; i < 2 ; i++) {
            HTML += this.generateTimerBtn(Timer.methodsnames[i])
        }
        HTML += this.generatemiddle()
        for(let i = 2; i < 4 ; i++) {
            HTML += this.generateBtn(Timer.methodsnames[i])
        }
        HTML += this.generatefooter();
        return HTML
    }
    generateHeader(){
        return ` <div class="h1 p-5 mt-4 text-center bg-light rounded">
        <span id="minutes">00</span> : <span id="seconds">00</span>: <span id="miliseconds">00</span>
      </div>
      <div id="controls">
        <div class="container text-center">`
    }
    generateTimerBtn(mthd){
        return ` 
        <button class="btn btn-lg btn-success" data-action="${mthd}" id="controls">
        ${mthd}
        </button>`
    }
    generatemiddle(){
        return `
        </div>
        <div class="container text-center">`
    }
    generateBtn(mthd){
        return `
        <button class="btn btn-lg btn-danger" data-action="${mthd}" id="controls">
        ${mthd}
        </button>`
    }
    generatefooter(){
        return`
            </div>
        </div>`
    }

    addEventHandlers() {
        // Put the element on the page with an id of start in a variable
        // Do the same for the stop button and the reset button
       
        let controls = document.getElementById("controls");
        controls.addEventListener("click", this);
        

    }
    handleEvent(e){
        //deturmine if what btn the user pressed
        let target = e.target;
        let action = target.dataset.action;
        let method = action + "Timer";
        this[method]();

       

    }

    startTimer() {

        if (this.isRunning == false) {
            this.isRunning = true;
            this.isIncementing = true;
            this.timer = setInterval(this.updateTimer, 10);

        }
    }
    decreaseTimer() {
        if (this.isRunning == false && this.elapsedTime > 0) {
            this.isRunning = true;
            this.isDecrementing = true;
            this.timer = setInterval(this.updateTimer, 10);

        }
    }
    updateTimer() {
        //ensure that the proper count is beeing taken into account
        if (this.isRunning && this.isIncementing) {
            const [minutes, seconds, milliseconds, cTime] = timer.incrementTimer(this.elapsedTime);
            this.elapsedTime = cTime;
            this.renderTimer(minutes, seconds, milliseconds);
        }
        else if (this.isRunning && this.isDecrementing) {  
            const [minutes, seconds, milliseconds, cTime] = timer.decrementTimer(this.elapsedTime);
            this.elapsedTime = cTime;
            this.renderTimer(minutes, seconds, milliseconds);
            if (this.elapsedTime == 0) {
                this.stopTimer()
            }    
        }
    }

    renderTimer(minutes, seconds, miliseconds) {
        //show the value of both on the webpage
        //this one being minutes
        document.getElementById("minutes").innerHTML = timer.padTimer(minutes);
        //this one being seconds
        document.getElementById("seconds").innerHTML = timer.padTimer(seconds);
        //this one for miliseconds
        document.getElementById("miliseconds").innerHTML = timer.padTimer(miliseconds);

    }


    stopTimer() {
        // if the timer is running, stop it by
        // set isRunning to false
        // call the function clearInterval to stop the timer
        // end if
        if (this.isRunning) {
            // set isRunning to false
            this.isRunning = false;
            this.isIncementing = false;
            this.isDecrementing = false;
            clearInterval(this.timer);
        }

    }

    resetTimer() {
        // stop the timer by calling stopTimer
        this.stopTimer();
        // set the timerTime back to 0
        this.elapsedTime = 0;
        // write 00 to the elements on the page for minutes and seconds
        document.getElementById("minutes").innerHTML = "00"
        document.getElementById("seconds").innerHTML = "00"
        document.getElementById("miliseconds").innerHTML = "00"
    }
}

// When the page has finished loading, call the function init
window.onload = () => { new Timer };