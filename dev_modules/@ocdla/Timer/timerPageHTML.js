/** @jsx vNode */


import {vNode, View} from "@ocdla/view"




export const mainHtmlComponent = function(props) {

    return (
        <div class="h1 p-5 mt-4  text-center bg-light rounded" id="timer">
            <input type="number" id="hours" value="0" style="width: 75px;"/>:
            <input type="number" id="minutes" value="0" style="width: 75px;"/> : 
            <input type="number" id="seconds" value="0" style="width: 75px;"/>  
        </div>
    );
};
export const mainButtonHtml = function(props){
    return(
        <div id="controls">
            <div class="container text-center">
            <ButtonHtml keys="start" />
            </div>
        </div>
    );
}
export const TimerButtonHtml = function(props){
    return(
        <div id="controls">
            <div class="container text-center">
            <ButtonHtml keys="stop,reset" />
            </div>
        </div>
    );
}
export const TimerComponent = function(props) {

    let h = props.hours.toString();
    let m = props.minutes.toString();
    let s = props.seconds.toString();

    return (
        <div class="timer h1 p-5 mt-4  text-center bg-light rounded"  id="timer">
        <span class="hours">{h} hr's:</span>
        <span class="minutes">{m} min's:</span>
        <span class="seconds">{s} sec's</span>
    </div>
    );
};
export const TimerFinishedComponent = function(props) {
    return (
        <div class="h1 p-5 mt-4  text-center bg-light rounded" id="timer">
            <p>Beep!</p>
        </div>
    );
};
const ButtonHtml = function(props) {

    // convert string of keys to an array of characters.
    let keys = props.keys.split(",");

    return (
        <div>
            {keys.map((key) => {
                return<button class="btn btn-lg btn-success" data-action={key} id="button">{key}</button>
                
            })}
        </div>
    );

};