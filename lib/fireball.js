
const MovingObject = require("./moving_object");

class Fireball extends MovingObject {
  constructor(options) {
    options.radius = Fireball.RADIUS;
    super(options);
    this.isWrappable = false;
  }
}

Fireball.RADIUS = 20;
// Fireball.SPEED = 65;

module.exports = Fireball;
