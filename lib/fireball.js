
const MovingObject = require("./moving_object");

class Fireball extends MovingObject {
  constructor(options) {
    // debugger
    options.radius = Fireball.RADIUS;
    super(options);
    this.collided = false;
    this.isWrappable = false;
  }
}

Fireball.RADIUS = 20;
// Fireball.SPEED = 65;

module.exports = Fireball;
