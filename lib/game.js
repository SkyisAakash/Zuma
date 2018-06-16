// const Asteroid = require("./asteroid");
// const Bullet = require("./bullet");
// const Ship = require("./ship");
const Ball = require("./ball");

class Game {
  constructor() {
    // this.asteroids = [];
    this.balls = [];
    // this.ships = [];

    // this.addBalls();
  }

  add(object) {
    if (object instanceof Ball) {
      this.balls.push(object);
    // } else if (object instanceof Bullet) {
    //   this.bullets.push(object);
    // } else if (object instanceof Ship) {
      // this.ships.push(object);
    } else {
      throw new Error("unknown type of object");
    }
  }

  addBalls() {
    for (let i = 0; i < Game.NUM_BALLS; i++) {
      this.add(new Ball({ game: this }));
    }
  }

  // addShip() {
  //   const ship = new Ship({
  //     pos: this.randomPosition(),
  //     game: this
  //   });
  //
  //   this.add(ship);
  //
  //   return ship;
  // }

  allObjects() {
    return [].concat(this.balls);
  }

  checkCollisions() {
    const allObjects = this.allObjects();
    for (let i = 0; i < allObjects.length; i++) {
      for (let j = 0; j < allObjects.length; j++) {
        const obj1 = allObjects[i];
        const obj2 = allObjects[j];

        if (obj1.isCollidedWith(obj2)) {
          const collision = obj1.collideWith(obj2);
          if (collision) return;
        }
      }
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  }

  moveObjects(delta) {
    this.allObjects().forEach((object) => {
      object.move(delta);
    });
  }

  randomPosition() {
    return [
      Game.DIM_X * Math.random(),
      Game.DIM_Y * Math.random()
    ];
  }

  remove(object) {
    if (object instanceof Ball) {
      this.balls.splice(this.balls.indexOf(object), 1);
    // } else if (object instanceof Asteroid) {
    //   this.asteroids.splice(this.asteroids.indexOf(object), 1);
    // } else if (object instanceof Ship) {
    //   this.ships.splice(this.ships.indexOf(object), 1);
    } else {
      throw new Error("unknown type of object");
    }
  }

  step(delta) {
    this.moveObjects(delta);
    // this.checkCollisions();
  }

  // wrap(pos) {
  //   return [
  //     Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)
  //   ];
  // }
}

Game.BG_COLOR = "yellow";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;
Game.NUM_BALLS = 10;

module.exports = Game;
