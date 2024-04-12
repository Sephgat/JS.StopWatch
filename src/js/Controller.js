/** @jsx vNode */
import { vNode, View } from "@ocdla/view"
import * as TimerHtml from '../../dev_modules/@ocdla/timer/timerPageHTML.js';
import Timer from '../../dev_modules/@ocdla/timer/timerObject.js';


//responable for createing action on the page
class Controller {
   

    static timer;

    static createTimer() {

        let html = View.createElement(<TimerHtml.mainHtmlComponent />);
        document.getElementById("html").appendChild(html)

        html = View.createElement(<TimerHtml.mainButtonHtml />);
        document.getElementById("html").appendChild(html)

    }
    static startTimer() {
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');
        let cal = Timer.calcTimer(parseInt(hours.value), parseInt(minutes.value), parseInt(seconds.value));
    
        this.timer = new Timer(cal);
    
        let html = View.createElement(<TimerHtml.TimerButtonHtml />)
        let temp = document.getElementById("controls")
        document.getElementById("html").replaceChild(html, temp);
    
        this.timer.start();

    
    }
    static stopTimer() {
        this.timer.stop()
    }
        

    static resetTimer() {
    this.timer.stop();
    let temp = document.getElementById("timer");
    let html = View.createElement(<TimerHtml.mainHtmlComponent />);
    document.getElementById("html").replaceChild(html, temp);

    temp = document.getElementById("controls");
    html = View.createElement(<TimerHtml.mainButtonHtml />);
    document.getElementById("html").replaceChild(html, temp);

    }
}
export default Controller;