# Zuma Infinite

  [Zuma Live!](https://skyisaakash.github.io/Zuma/)
## Background and Overview

  **ZumaInfinite** is a game comprising of balls of four colors i.e. red, blue, yellow and green
  ,a frog controlled by user in the center and a skull emblem.
  User can shoot balls from frog in any direction to make group of three or more same colored balls, in which case the balls explode and user gets points depending on number
  of balls exploded.
  The ball to shoot can be seen in frog's mouth and the next ball color can be seen in frog's head.
  Chain of balls proceeds in spiral towards the skull emblem and as it reaches the skull emblem the game ends.
  The goal of user here is to shoot balls in appropriate direction so balls explode and disappear and hence go away.
  New balls keep coming until the game ends or user stops simulation.

## Functionality & MVP
  - [x] Make frog respond to direction of mouse pointer
  - [x] Make chain of balls appear with random colored balls
  - [x] Move chain of balls in spiral towards the skull emblem
  - [x] Shoot balls from frog in appropriate direction upon mouse click
  - [x] Add newball in the chain upon shooting
  - [x] Make balls disappear if location of fireball has more than two same colored balls as neighbors
  - [x] Start,Stop actions for game
  - [x] Make sounds on shooting balls

## Wireframes

  * This app is going to be a one page app with main game canvas at the center of the page  and controls to pause, play, replay, mute on left side of the canvas.
  * At the bottom of the page there will be links for github and linked-in

 ![Wireframe for ZumaInfinite](https://s26.postimg.cc/tvhi4v8s9/zuma.png)
## Architecture and Technologies

This project will be implemented using following technologies:

- HTML5 Canvas for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.
- Vanilla JavaScript for game structure and game logic,
- WebAudioAPI will be used for sound generation, processing and control.

In addition to the webpack entry file i.e. zuma.js, there will be some more scripts involved in this project:
* balls.js - This script contains class definition for Ball objects. It inherits from parent class MovingObject.
* fireball.js - This script contains class definition for Fireball objects which are the balls that users can shoot from the frog. It inherits from parent class MovingObject.
* frog.js - This script contains class definition for frog along with the logic of selecting random ball to shoot, shooting fireball, drawing frog on canvas and calculating angular position of frog so it can move with mouse pointer.
* game_view.js - This script
* game.js -
* moving_object.js -


## Implementation Timeline
### Over the weekend
* Make frog respond to the direction of mouse pointer
* Make chain of balls appear with random colored balls with appropriate backgrounds
* Move chain of balls in spiral towards the skull emblem
* Shoot balls from frog in appropriate direction upon mouse click
### Day1
* Add newball in chain upon shooting
### Day2
* Make balls explode if location of fireball has more than two same colored balls as neighbors
* Move balls backwards when some balls explode to cover space created by exploded balls
### Day3
* Start,Stop actions for game
### Day4
* Hear sounds on shooting balls

## Bonus features

* Let user decide number of balls they want to play with.
* Add more level(s).
