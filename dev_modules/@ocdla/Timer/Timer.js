// Note this class actually works:
// let cd = new Timer(10);
// cd.start();
// cd.stop();

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
                document.getElementById("Timer").innerHTML = Timer.TIMER_FINISHED_SOUND;
                // this.rener(0);
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

        let time = `${h}hrs : ${m}mins : ${s}secs`;
        //console.log(time);
        document.getElementById("Timer").innerHTML = time;

        return [h, m, s];
        // Use JSX syntax.
        // For Week 2
        /*
        return (
            <div class="timer">
                <span class="hours">{h}</span>
                <span class="minutes">{m}</span>
                <span class="seconds">{s}</span>
            </div>
        );
        */
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
    }

    static parse(seconds, pad = true) {

        const [hr, min, sec] = Timer.convertTimer(seconds)
        if (pad = true) {
            Timer.padTimer(hr);
            Timer.padTimer(min);
            Timer.padTimer(sec);
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

