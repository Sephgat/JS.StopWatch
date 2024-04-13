/** @jsx vNode */
import { vNode, View } from "../../node_modules/@ocdla/view/view.js";
import { TimerComponent } from '../../node_modules/@ocdla/timer/TimerComponent.js';
import Timer from '../../node_modules/@ocdla/timer/Timer.js';


//responable for createing action on the page
class Controller {


    static timer;

    constructor() {

        let html = View.createElement(<TimerComponent hours="0" minutes="00" seconds="00" />);
        document.getElementById("html").appendChild(html);


    }
    static startTimer() {
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');
        let cal = Timer.calcTimer(parseInt(hours.value), parseInt(minutes.value), parseInt(seconds.value));

        this.timer = new Timer(cal);
        this.timer.onTick(function (h, m, s) {
            let html = View.createElement(<TimerComponent hours={h} minutes={m} seconds={s} />);
            let temp = document.getElementById("timer")
            document.getElementById("html").replaceChild(html, temp);
            Controller.addEventHandlers();
        });

        this.timer.start();


    }
    static addEventHandlers() {
        // Put the element on the page with an id of start in a variable
        // Do the same for the stop button and the reset button
    
        let controls = document.getElementById("controls");
        controls.addEventListener("click", Controller.handleEvent);
    
    
    }
    static handleEvent(e) {
        //deturmine if what btn the user pressed
        let target = e.target;
        let action = target.dataset.action;
        //let method = action + "Timer";
        //this[method]()
        if (action == "start") {
            Controller.startTimer();
            Controller.addEventHandlers();
        }
        if (action == "stop") {
            Controller.stopTimer();
            Controller.addEventHandlers();
        }
        if (action == "reset") {
            //timer.stop();
            Controller.resetTimer();
            Controller.addEventHandlers();
        }
        
    }
    
    
    static stopTimer() {
        this.timer.stop()
    }


    static resetTimer() {
        this.timer.stop();
        let temp = document.getElementById("timer");
        let html = View.createElement(<TimerComponent hours="0" minutes="00" seconds="00" />);
        document.getElementById("html").replaceChild(html, temp);



    }
}
export default Controller;