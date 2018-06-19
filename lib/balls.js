
const MovingObject = require("./moving_object");

class Ball extends MovingObject {
  constructor(options) {
    // debugger
    options.radius = Ball.RADIUS;
    super(options);
    if(options.percent){this.percent = options.percent - 1;}
    this.isWrappable = false;
    this.angle = 0;
  }
}

Ball.RADIUS = 20;
// Fireball.SPEED = 65;

module.exports = Ball;
