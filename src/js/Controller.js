/** @jsx vNode */
import { vNode, View } from "../../node_modules/@ocdla/view/view.js";
import { TimerComponent } from '../../node_modules/@ocdla/timer/TimerComponent.js';
import { APIComponent } from '../../node_modules/@ocdla/timer/APIComponent.js';
import Timer from '../../node_modules/@ocdla/timer/Timer.js';
import Api from '../../node_modules/@ocdla/salesforceapi/salesforceapi.js';



/**
 * Controller class that manages the timer, API,  displaying interactions.
 */
class Controller {


    timer;
    clock;
    constructor() {

         /**
         * Root element where the clock is displayed.
         * @type {Element}
         */
        this.clock = View.createRoot("#html");
        /**
         * Api instance used to fetch data
         * @type {Api}
         */
        this.api = new Api();
        // Render the timer
        this.clock.render(<TimerComponent hours="0" minutes="00" seconds="00" />);

        // Fetch data from API
        this.getapi();


    }

    /**
     * Asynchronously fetches data from the API and renders it.
     * @async
     */
    async getapi() {
        let a = await this.api.query();
        for(let i = 0; i < a.length; i++){
        let html = View.createElement(<APIComponent hours={a[i].hours__c} minutes={a[i].minutes__c} seconds={a[i].seconds__c}/>);
        document.getElementById("html").appendChild(html);
        }
    }
    

     /**
     * Get user input from an input element by ID.
     * @param {string} id - The ID of the input element.
     * @returns {number} - The parsed integer value of the input element.
     */
    getUserInput(id){
        let elem = document.getElementById(id);
        return parseInt(elem.value);
    }


    /**
     * Start the timer based on user input and update the clock.
     */
    startTimer() {
        let hoursInput = this.getUserInput('hours');
        let minutesInput = this.getUserInput('minutes');
        let secondsInput = this.getUserInput('seconds');
        let savedtime = {
            "Name":"attempt",
            "hours__c": hoursInput,
            "minutes__c": minutesInput,
            "seconds__c": secondsInput
        }
        this.api.Post(savedtime)


        let numSeconds = Timer.toSeconds(hoursInput,minutesInput,secondsInput);

        this.timer = new Timer(numSeconds);

        
        this.timer.onTick((h, m, s) => {
            this.clock.update(<TimerComponent hours={h} minutes={m} seconds={s} />);
        });

        this.timer.start();

    }
    /**
     * Add event handlers for start, stop, and reset buttons.
     */
    addEventHandlers() {
        // Put the element on the page with an id of start in a variable
        // Do the same for the stop button and the reset button

        let controls = document.getElementById("html");
        controls.addEventListener("click", this);


    }
    /**
     * Handle events triggered by button clicks.
     * @param {Event} e - The event object.
     */
    handleEvent(e) {
        let target = e.target;
        let action = target.dataset.action;
        if (action == "start") {
            this.startTimer();

        }
        if (action == "stop") {
            this.timer.stop()

        }
        if (action == "reset") {
            this.timer.stop();
            this.clock.update(<TimerComponent hours="0" minutes="00" seconds="00" />);
        }

    }

}
export default Controller;