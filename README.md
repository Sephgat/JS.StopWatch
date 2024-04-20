# StopWatch

## Description
This project is a countdown timer where users can input hours, minutes, and seconds,
and the program will initiate a countdown based on the provided time input. 

## Installation
* To set up the project, follow these steps:
  1. Open your terminal.
  2. Run `npm update`.
  3. Run `npm run build`
  4. Run `npm run watch`

## Usage
* Input desired hours, minutes, and seconds for the countdown
* Start the timer by pressing the "start" button
* Wait till the timer reaches 0
* press "reset" to enter in a new time
* press start again start the timer again

## Documentation
- Controller Class
  - The Controller class in this project serves as the main controller that coordinates the interactions between the user interface and the timer functionality. It handles user inputs, such as starting the timer, resetting the countdown, and any other control actions, also it is in charged of displaying the timer.
- Methods
  - startTimer(): Initiates the countdown timer based on the user input
  - getapi(): is in charge of handling the api request
-Timer Class
  - The Timer class is responsible for processing and initializing the user's timer. It calculates the time remaining and controls the countdown functionality.
- Methods
  - start(): starts the timer
  - stop(): stops the timer 
  - tick(): count down the timer
  - ontick(): returns the time left  
