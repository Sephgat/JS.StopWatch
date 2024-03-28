/*  Overview
    This application simulates a simple stop watch on the page.  The user 
    can start, stop or reset the clock using the buttons and link on the page.

    There are 3 global variables that are used to keep track of the "state"
    of the application.
    -  isRunning - is a boolean that keeps track of whether the stopwatch is running or paused
    -  elapsedTime - is an integer that represents number of seconds that the stopwatch has been running
    -  timer - a reference to the code that fires at 1 second intervals that updates the clock

    There are 3 functions that are associated with the click event handler for the buttons
    and link on the page.  stopTimer, startTimer and resetTimer.

    There are 3 "helper" functions
    -   init is called when the page loads to set up the page
    -   incrementTimer is called at one second intervals to update the page
    -   pad is used to make sure that min or sec that are 1 digit can be displayed as 2
        digits by adding a leading zero
*/
/*
    Create 3 global variables, isRunning, timer and elapsedTime.
    Initialize them to false, null and 0 respectively.
*/


class Timer{
    constructor(){
    this.isRunning = false;
    this.isIncementing = false;
    this.isDecrementing = false;
    this.timer = null;
    this.elapsedTime = 0; 

    this.createTimer = this.createTimer.bind(this);
    this.incrementTimer = this.incrementTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.pad = this.pad.bind(this)
    document.getElementById("addtimer").onclick = this.createTimer.bind(this);
    }
    createTimer(){
        document.getElementById("timer").innerHTML = this.generateHTML()
        this.addEventHandlers()
    }
    generateHTML(){
        return   ` <div class="h1 p-5 mt-4 text-center bg-light rounded">
        <span id="minutes">00</span> : <span id="seconds">00</span>: <span id="miliseconds">00</span>
      </div>
  
      <!-- timer buttons -->
      <div class="container text-center">
          <button class="btn btn-lg btn-success" id="start">
            Start
          </button>
          <button class="btn btn-lg btn-danger" id="stop">
            Stop
          </button>
        </div>
        <div class="container text-center">
          <button class="btn btn-link btn-block" id="reset">
            Reset
          </button>
          <button class="btn btn-lg btn-success" id="decrement">
            Count down
          </button>
        </div>
      </div> `
    }

    addEventHandlers()
    {
        // Put the element on the page with an id of start in a variable
        // Do the same for the stop button and the reset button
        const startBtn = document.getElementById("start");
        const stopBtn = document.getElementById("stop");
        const resetBtn = document.getElementById("reset");
        const decrementBtn = document.getElementById("decrement");

        // Add an onclick handler to each of the buttons
        // The functions startTimer, stopTimer and resetTimer should fire when one of the buttons is clicked
        startBtn.onclick = this.startTimer.bind(this);
        stopBtn.onclick = this.stopTimer.bind(this);
        resetBtn.onclick = this.resetTimer.bind(this);
        decrementBtn.onclick = this.decreaseTimer.bind(this);
    }


    startTimer() {
        
        if(this.isRunning == false){
            this.isRunning = true;
            this.isIncementing = true;
            this.timer = setInterval(this.updateTimer, 10);

        }
    }
    decreaseTimer(){
        if(this.isRunning == false){
            this.isRunning = true;
            this.isDecrementing = true;
            this.timer = setInterval(this.updateTimer, 10);

        }
    }
    updateTimer() {
        if(this.isRunning && this.isIncementing){
        const [minutes, seconds, milliseconds] = this.incrementTimer();
        this.renderTimer(minutes, seconds, milliseconds);
        }
        else if (this.isRunning && this.isDecrementing){
            const [minutes, seconds, milliseconds] = this.decrementTimer();
        this.renderTimer(minutes, seconds, milliseconds);
        } 
    }

    incrementTimer() {
        // Increment the elapsedTime
        this.elapsedTime++;
        
        // Calculate minutes, seconds, and milliseconds
        this.minutes = Math.floor(this.elapsedTime / 6000);
        this.seconds = Math.floor(this.elapsedTime / 100) % 60;
        this.milliseconds = this.elapsedTime % 100;

        return [this.minutes, this.seconds, this.milliseconds];
    }
    decrementTimer() {
        // decrement the elapsedTime
        this.elapsedTime--;
        if(this.elapsedTime == 0 ){
            this.stopTimer()
        }
        
        // Calculate minutes, seconds, and milliseconds
        this.minutes = Math.floor(this.elapsedTime / 6000);
        this.seconds = Math.floor(this.elapsedTime / 100) % 60;
        this.milliseconds = this.elapsedTime % 100;

        return [this.minutes, this.seconds, this.milliseconds];
    }


    renderTimer(minutes, seconds, miliseconds){
        //show the value of both on the webpage
        //this one being minutes
        document.getElementById("minutes").innerHTML = this.pad(minutes);
        //this one being seconds
        document.getElementById("seconds").innerHTML = this.pad(seconds);
        //this one for miliseconds
        document.getElementById("miliseconds").innerHTML = this.pad(miliseconds);

    }




    pad(number) {
        // add a leading 0 to number if the number is < 10
        if(number < 10){
            number = "0" + number;

        }
        // return number
        return number;
    }

    stopTimer() {
        // if the timer is running, stop it by
            // set isRunning to false
            // call the function clearInterval to stop the timer
        // end if
        if (this.isRunning){
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
window.onload = () => {new Timer };