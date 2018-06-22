# Welcome to <a href="https://skyisaakash.github.io/Zuma/"><img src="https://s26.postimg.cc/wp00y4rjt/Linkforreadme.jpg" width = "130" display="inline-block"></a>

  [Zuma Live!](https://skyisaakash.github.io/Zuma/)

## Background and Overview

  ![MainPage](https://s26.postimg.cc/8t62xzyux/mainpagezuma.png)

  **ZumaInfinite** is a classic game comprising of balls of four colors i.e. red, blue, yellow and green
  ,a frog controlled by user in the center and a skull emblem.

  User can shoot balls from frog in any direction to make group of three or more same colored balls, in which case the balls explode and user gets points depending on number
  of balls exploded.
  The difficulty increases to four balls after user blows certain number of balls.

  Chain of balls proceeds in spiral towards the skull emblem and when it reaches the skull emblem the game ends.

  The goal of user here is to shoot balls in appropriate direction so balls explode and hence go away.

  Currently there are 30 balls but I might keep changing number of balls or even make it infinite from time to time so come back to challenge yourself. :)

  ![Gamepage](https://s26.postimg.cc/i0yberb2x/gamepage.png)

## Design

  This game was designed and built from scratch in 5 days. The proposal was prepared to implement MVPs to get site functional. More details about proposal can be viewed [here](https://github.com/SkyisAakash/Zuma/wiki).

## Technologies

  This project was implemented using following technologies:

  - HTML5 Canvas for DOM manipulation and rendering,
  - Webpack to bundle and serve up the various scripts.
  - Vanilla JavaScript for game structure and game logic,
  - HTML audio element was used for sound generation, processing and control.

## Logic and Math involved:

![GIF](https://drive.google.com/uc?export=download&id=1ioEBwE0iNV2SUWRTdKaBunpswLIpqVVp)

### Displaying balls:
  One of the biggest Challenges I faced while building this game was making balls rotate in spiral on canvas.
  Here is how I achieved the functionality.
  All the balls themselves are temporary canvas. The game canvas as a whole contains all those temporary canvases.
  The code has algorithm implemented to calculate coordinates for the spiral.
  Then the entry point of the canvas is transferred to that point where a temporary canvas is drawn with appropriate image depending on the color of ball.

### Calculating Coordinates:

  The whole spiral is divided in five semi circles whose radius reduces gradually and center point shifts slightly in order to connect them together on their end points.
  The following code snippet calculates coordinates for the balls on the outer bottom semi circle.

```JavaScript
  getCircle1XYatPercent(startPt,endPt,percent) {
        let positionangle = Math.PI*percent;
        var centerx = 490;
        var centery = 350;
        var X = centerx + Math.cos(positionangle) * 320;
        var Y = centery + Math.sin(positionangle) * 320;
        return( {x:X,y:Y} );
    }
```

  The above code snippet takes in start point and end point and percentage. Percentage is the indicator used in code which represents how much of path a particular ball has covered.
  It ranges from 0 to 190. 0 representing the entry point of ball in canvas and 190 representing the location of skull emblem.
  Depending on the percent the coordinates of the ball are calculated and fed to the temporary canvas like so.

```JavaScript
if(this.percent<191){
       let usepercent=(this.percent-171)/20;
       xy=this.getCircle5XYatPercent({x:750,y:360},{x:230,y:360},usepercent);
   }
```
  This approach of keeping percent and feeding it to algorithm was taken so that more levels of game will be easy to build in future by just changing those functions and their starting and end points without changing much of code.

### Rotating frog with mousemove

  The frog is more complicated then it looks.
  It monitors location of mouse as it moves, calculates distance between mouse and center of frog, hence angle is calculated based upon that and that angle is fed to
  1 Frog itself
  2 Fireball in frog's mouth
  3 Circle representing of next ball on frog's head

  Following code snippet is a small part of this whole process which gives a glimpse of the calculation involved.

```javascript

let center = [left+width/2, top+height/2];
if (!e) return;
  let  vx = e.layerX - this.cx;
  let  vy = e.layerY - this.cy;
this.angle = Math.atan2(-vx,vy);
```
  Again, the ball in mouth of frog and color of next ball on frog's head are temporary canvas with their own coordinates which changes with location of mouse.

### Fireball

  Fireball uses same angle calculated as mentioned above to determine the direction for shooting.
  Upon intersecting with first ball in the chain it gets added in the chain and the balls array of game is updated.
  At the same time the checking for colors of neighbor balls is done and if the number is greater than certain numbers then they are removed and percent of all the balls before that location are reduced to push them back.
  A while loop takes care of selecting balls of same color around the fireball to make them explode. It can be better understood from the following code snippet.

```javascript
while(ball.color === balls[center].color) {
  result.push(balls[center]);
  center--;
  if (center < 0) return result;
}
```

## Future Implementations

* Add more levels
* Make a coin appear for user to fire at for bonus
* Save high scores for user
