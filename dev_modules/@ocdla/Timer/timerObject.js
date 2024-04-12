/** @jsx vNode */
// Note this class actually works:
// let cd = new Timer(10);
// cd.start();
// cd.stop();
import {vNode, View} from "@ocdla/view"
import {TimerComponent} from './timerPageHTML.js';
import {TimerFinishedComponent} from './timerPageHTML.js';

class Timer {

    // The generator used to display units (usually seconds) for this timer.
    g;

    // Window.setInterval or Node global.setInterval.
    interval;

    // Specify precision in milliseconds.
    // Defaults to 1 second.
    static PRECISION = 1000;

    // What sounds does the timer make when done?
    static TIMER_FINISHED_SOUND = 'BEEP!';
    
    // Instantiate a Timer; initialize its generator.
    // For more information see:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
    constructor(timestringOrSeconds) {
        // let seconds = TimeString.seconds(timestring); Imagine passing in "5m 30s"; would need to be converted to seconds.
        let seconds = timestringOrSeconds;
        this.g = this.counter(seconds);
    }


    // Generator function that returns a number each time its next() method is called.
    * counter(units) {
        for (let i = units; i >= 0; i--) {
            yield i;
        }
    }


    // Start this timer.
    start() {

        this.interval = setInterval(() => {
            const seconds = this.g.next().value;
            if (seconds === undefined) {
                clearInterval(this.interval);
                let html = View.createElement(<TimerFinishedComponent/>)

                //document.getElementById("timer").appendChild(html)
                let temp = document.getElementById("timer")
                document.getElementById("html").replaceChild(html,temp);

            } else {
                //console.log(seconds);
                return this.render(seconds)
            }
        }, Timer.PRECISION);

    }


    // Stop this timer.
    stop() {
        clearInterval(this.interval);
        // this.render(0);
    }


    render(seconds) {

        let h, m, s;

        [h, m, s] = Timer.parse(seconds); // Parse seconds into hour,min,sec *string notation.

        
        let html = View.createElement(<TimerComponent hours={h} minutes={m} seconds={s}/>);
        
        let temp = document.getElementById("timer")
        document.getElementById("html").replaceChild(html,temp);

    }


    static convertTimer(sec) {
        let hours = Math.floor(sec / 3600);
        let minutes = Math.floor((sec % 3600) / 60);
        let seconds = Math.floor(sec % 60)

        return [hours, minutes, seconds];

    }
    static padTimer(number) {
        if (number < 10) {
            number = "0" + number;

        }
        return number;
    }

    static parse(seconds, pad = true) {

        let [hr, min, sec] = Timer.convertTimer(seconds)
        if (pad = true) {
            hr = Timer.padTimer(hr);
            min = Timer.padTimer(min);
            sec = Timer.padTimer(sec);
        }
        return [hr, min, sec]; // For example to display 01:25:05
    }
    static calcTimer(hours, minutes, seconds){
        let totalSeconds = 0;
        if (!isNaN(hours))
        totalSeconds = totalSeconds + (hours * 3600);
        if (!isNaN(minutes))
        totalSeconds = totalSeconds + (minutes * 60);
        if(!isNaN(seconds))
        totalSeconds =  totalSeconds + seconds;
        
        return totalSeconds;
    }
   
}



export default Timer;

