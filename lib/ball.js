
const MovingObject = require("./moving_object");

class Ball extends MovingObject {
  constructor(options) {
    options.radius = Ball.RADIUS;
    super(options);
    this.isWrappable = false;
  }
}

Ball.RADIUS = 20;
// Ball.SPEED = 65;

module.exports = Ball;
