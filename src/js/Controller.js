/** @jsx vNode */
import { vNode, View } from "../../node_modules/@ocdla/view/view.js";
import { TimerComponent } from '../../node_modules/@ocdla/timer/TimerComponent.js';
import Timer from '../../node_modules/@ocdla/timer/Timer.js';
import Api from '../../node_modules/@ocdla/salesforceapi/salesforceapi.js'



//responable for createing action on the page
class Controller {


    timer;
    clock;
    constructor() {


        this.clock = View.createRoot("#html");
        this.clock.render(<TimerComponent hours="0" minutes="00" seconds="00" />);
        //this.getapi();


    }


    async getapi() {
        const api = new Api();
        let a = await api.query();
        console.log(a[0].Name);
        let html = this.savedTimer(a[0]);
        document.getElementById("saved").innerHTML = html;
    }
    savedTimer(a) {
        return `
        <div class=text-center bg-light rounded>
        ${a.Name}: <div class="savedhours"> ${a.hours__c} hours<div/> <div class="savedmin"> ${a.minutes__c} minutes<div/> <div id="savedsec"> ${a.seconds__c} seconds<div/>
        </div>`
    }

    getUserInput(id){
        let elem = document.getElementById(id);
        return parseInt(elem.value);
    }
    startTimer() {
        let hoursInput = this.getUserInput('hours');
        let minutesInput = this.getUserInput('minutes');
        let secondsInput = this.getUserInput('seconds');



        let numSeconds = Timer.toSeconds(hoursInput,minutesInput,secondsInput);

        this.timer = new Timer(numSeconds);

        
        this.timer.onTick((h, m, s) => {
            this.clock.update(<TimerComponent hours={h} minutes={m} seconds={s} />);
        });

        this.timer.start();

    }
    addEventHandlers() {
        // Put the element on the page with an id of start in a variable
        // Do the same for the stop button and the reset button

        let controls = document.getElementById("html");
        controls.addEventListener("click", this);


    }
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