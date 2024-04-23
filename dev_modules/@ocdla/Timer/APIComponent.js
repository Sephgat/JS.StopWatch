/** @jsx vNode */


import { vNode, View } from "../view/view.js";




export const APIComponent = function (props) {
    let h = props.hours.toString();
    let m = props.minutes.toString();
    let s = props.seconds.toString();
    return (
        <div class="text-center bg-light rounded">
            <div>
                {h} hours : {m} minutes : {s} seconds
            </div>
        </div>
    );
};

const Button = function (props) {

    // convert string of keys to an array of characters.

    return (
        <button class="btn btn-lg btn-success" data-action={props.action} id={props.id}>{props.label}</button>
    );

};