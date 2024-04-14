/** @jsx vNode */


import {vNode, View} from "../view/view.js";



/** @jsx vNode */


export const TimerComponent = function(props) {

    let h = props.hours.toString();
    let m = props.minutes.toString();
    let s = props.seconds.toString();

    return (
        <div class="timer h1 p-5 mt-4  text-center bg-light rounded"  id="timer">
            <div>
                    <input type="number" id="hours" value={h} style="width: 75px;"/>:
                    <input type="number" id="minutes" value={m} style="width: 75px;"/> : 
                    <input type="number" id="seconds" value={s} style="width: 75px;"/>
            </div>
            <div id="controls">
                <div class="container text-center">
                    <Button action="start" id="start" label="start"/>
                    <Button action="stop" id="stop" label="stop"/>
                    <Button action="reset" id="reset" label="reset"/>
                </div>
            </div>
        </div>
    );
};
/*export const TimerFinishedComponent = function(props) {
    return (
        <div class="h1 p-5 mt-4  text-center bg-light rounded" id="timer">
            <p>Beep!</p>
        </div>
    );
};*/
const Button = function(props) {

    // convert string of keys to an array of characters.

    return (
                <button class="btn btn-lg btn-success" data-action={props.action} id={props.id}>{props.label}</button>
    );

};