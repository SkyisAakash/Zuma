# Zuma Infinite
## Background and Overview

  **ZumaInfinite** is a game comprising of balls of four colors i.e. red, blue, yellow and green
  ,a frog controlled by user in the center and a skull emblem.
  User can shoot balls from frog in any direction to make group of three or more same colored balls, in which case the balls explode and user gets points depending on number
  of balls exploded.
  Chain of balls proceeds in spiral towards the skull emblem and as it reaches the skull emblem the game ends.
  The goal of user here is to shoot balls in appropriate direction so balls explode and disappear and hence go away.
  New balls keep coming until the game ends or user stops simulation.

## Functionality & MVP
  - [ ] Make frog respond to direction of mouse pointer
  - [ ] Make chain of balls appear with random colored balls
  - [ ] Move chain of balls in spiral towards the skull emblem
  - [ ] Shoot balls from frog in appropriate direction upon mouse click
  - [ ] Hear sounds on shooting balls
  - [ ] Add newball in the chain upon shooting
  - [ ] Make balls explode if location of fireball has more than two same colored balls as neighbors
  - [ ] Start,Stop actions for game

## Wireframes

## Architecture and Technologies

This project will be implemented using following technologies:

- HTML5 Canvas for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.
- Vanilla JavaScript for game structure and game logic,
- Web Audio API for sound generation, processing and control. WebAudioAPI allows for  simultaneous sounds with more dependable time triggering

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
### Day3
* Move balls backwards when some balls explode to cover space created by exploded balls
### Day4
* Hear sounds on shooting balls
* Start,Stop actions for game

## Bonus features

* Make Background appropriate image
* Make coins appear for user to shoot for extra points
