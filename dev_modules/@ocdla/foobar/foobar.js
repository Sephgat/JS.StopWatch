 export function incrementTimer(elapsedTime) {
    // Increment the elapsedTime
    elapsedTime++;

    // Calculate minutes, seconds, and milliseconds
    let minutes = Math.floor(elapsedTime / 6000);
    let seconds = Math.floor(elapsedTime / 100) % 60;
    let milliseconds = elapsedTime % 100;

    return [minutes, seconds, milliseconds, elapsedTime];
}
export function decrementTimer(elapsedTime) {
    // decrement the elapsedTime
    elapsedTime--;
    

    // Calculate minutes, seconds, and milliseconds
    let minutes = Math.floor(elapsedTime / 6000);
    let seconds = Math.floor(elapsedTime / 100) % 60;
    let milliseconds = elapsedTime % 100;

    return [minutes, seconds, milliseconds, elapsedTime];
}
export function padTimer(number) {
    // add a leading 0 to number if the number is < 10
    if (number < 10) {
        number = "0" + number;

    }
    // return number
    return number;
}