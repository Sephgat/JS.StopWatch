/** @jsx vNode */

/**
 * Represents a Timer with countdown functionality.
 */
class Timer {
    /**
    The generator used to display units (usually seconds) for this timer.
    */
    g;

    /**
     * Rederce to the interval used for timer updates
     * @type {number}
     */
    interval;


    /**
     * Array to store csllback functions
     */
    callbacks = [];

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
        this.callbacks = [];
    }


    // Generator function that returns a number each time its next() method is called.
    * counter(units) {
        for (let i = units - 1; i >= 0; i--) {
            yield i;
        }
    }


    /**
    * Start the timer and trigger tick function at specified intervals.
    */
    start() {

        this.interval = setInterval(() => {
            const seconds = this.g.next().value;
            if (seconds === undefined) {
                clearInterval(this.interval);

            } else {
                //console.log(seconds);
                return this.tick(seconds)
            }
        }, Timer.PRECISION);

    }


    /**
    * Stop the timer.
    */
    stop() {
        clearInterval(this.interval);
        // this.render(0);
    }

    /**
     * Execute callback functions with the current time values.
     * @param {number} seconds - The remaining seconds on the timer.
     */
    tick(seconds) {


        let [h, m, s] = Timer.parse(seconds); // Parse seconds into hour,min,sec *string notation.
        for (let i = 0; i < this.callbacks.length; i++) {
            this.callbacks[i](h, m, s);
        }

    }
    /**
     * Register a callback function to be executed on each tick.
     * @param {function} fn  - The callback function to be executed.
     */
    onTick(fn) {
        this.callbacks.push(fn);
    }
     /**
     * Convert total seconds into hours, minutes, and seconds.
     * @param {number} sec - The total seconds to convert.
     * @returns {number[]} - An array containing hours, minutes, and seconds.
     */
    static convertTimer(sec) {
        let hours = Math.floor(sec / 3600);
        let minutes = Math.floor((sec % 3600) / 60);
        let seconds = Math.floor(sec % 60)

        return [hours, minutes, seconds];

    }
    /**
    * Pad a number with a leading zero if it is less than 10.
    * @param {number} number - The number to pad.
    * @returns {string} - The padded number as a string.
    */
    static padTimer(number) {
        if (number < 10) {
            number = "0" + number;

        }
        return number;
    }

    /**
    * Parse total seconds into hours, minutes, and seconds.
    * @param {number} seconds - The total seconds to parse.
    * @param {boolean} pad - Whether to pad the values with zeros.
    * @returns {string[]} - An array containing hour, minute, and second strings.
    */
    static parse(seconds, pad = true) {

        let [hr, min, sec] = Timer.convertTimer(seconds)
        if (pad = true) {
            hr = Timer.padTimer(hr);
            min = Timer.padTimer(min);
            sec = Timer.padTimer(sec);
        }
        return [hr, min, sec]; // For example to display 01:25:05
    }
    /**
    * Convert hours, minutes, and seconds into total seconds.
    * @param {number} hours - The hours component.
    * @param {number} minutes - The minutes component.
    * @param {number} seconds - The seconds component.
    * @returns {number} - The total seconds equivalent.
    */
    static toSeconds(hours, minutes, seconds) {
        let totalSeconds = 0;
        if (!isNaN(hours))
            totalSeconds = totalSeconds + (hours * 3600);
        if (!isNaN(minutes))
            totalSeconds = totalSeconds + (minutes * 60);
        if (!isNaN(seconds))
            totalSeconds = totalSeconds + seconds;

        return totalSeconds;
    }

}



export default Timer;

