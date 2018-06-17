// const Asteroid = require("./asteroid");
// const Bullet = require("./bullet");
// const Ship = require("./ship");
const Fireball = require("./fireball");
const Ball = require("./balls");
const Frog = require("./frog");

class Game {
  constructor(options) {
    // this.asteroids = [];
    this.frog = [];
    this.ctx = options.ctx;
    this.balls = [];
    this.fireball = [];
    this.canvasEl = options.canvasEl;
    // this.won = "false";
    // debugger
  //   this.frog = new Frog({
  //       x: this.canvasEl.width/2,
  //     y: this.canvasEl.height/2,
  //     radius: 40,
  //     color: 'black',
  //     ctx: this.ctx,
  //     canvasEl: this.canvasEl,
  //     game: this  // this.ships = [];
  //
  this.myLoop(Game.NUM_BALLS);
  // this.moreballs();
  // });
}



  add(object) {
    if (object instanceof Frog) {
      this.frog.push(object);
    } else if (object instanceof Fireball) {
      this.fireball.push(object);
      // debugger
      // console.log(this.fireball);
      // console.log(object);
      // debugger
    } else if (object instanceof Ball) {
      // console.log(object);
      this.balls.push(object);
    } else {
      throw new Error("unknown type of object");
    }
  }

  addFrog() {
    const frog = new Frog({
      x: this.canvasEl.width/2,
      y: this.canvasEl.height/2,
      radius: 40,
      color: 'black',
      ctx: this.ctx,
      canvasEl: this.canvasEl,
      game: this  // this.ships = [];
  });
  this.add(frog);
  // debugger
  return frog;
  }

  addBalls(id) {
    const colorArray = ["yellow", "green", "blue","red"];
    const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.add(new Ball({ game: this,
                          vel:[0,1],
                          pos:[this.canvasEl.width-180,0],
                          speed:0.15, color: randomColor, ballname:"ball",
                        id: id }));
                        // console.log(id);
}


  myLoop (i) {
    let self = this;
   setTimeout(function () {
      self.addBalls(i);
      if (--i)self.myLoop(i);
    }, 330);
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
    // debugger
    // console.log(this.fireball);
    const allOfEm = [].concat(this.frog, this.fireball, this.balls);
    // console.log(allOfEm);
    return allOfEm;
  }
  //
  // checkCollisions() {
  //   const allObjects = this.allObjects();
  //   for (let i = 0; i < allObjects.length; i++) {
  //     for (let j = 0; j < allObjects.length; j++) {
  //       const obj1 = allObjects[i];
  //       const obj2 = allObjects[j];
  //
  //       if (obj1.isCollidedWith(obj2)) {
  //         const collision = obj1.collideWith(obj2);
  //         if (collision) return;
  //       }
  //     }
  //   }
  // }

  draw(ctx) {
    let background = new Image();
    background.src = "https://s26.postimg.cc/g1ewr6kt5/spiral.jpg";
    // console.log(this.fireball);
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    // ctx.fillStyle = Game.BG_COLOR;
    // debugger
    ctx.drawImage(background,0,0,background.width,background.height,0,0,this.canvasEl.width, this.canvasEl.height);
    // debugger
    // ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach((object) => {

       // if (object instanceof Fireball) {
         // debugger
       // }
      object.draw(ctx);
    });
  }

  // isOutOfBounds(pos) {
  //   return (pos[0] < 0) || (pos[1] < 0) ||
  //     (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  // }

  moveObjects(delta) {
    this.allObjects().forEach((object) => {
      object.move(delta);
    });
  }

  // randomPosition() {
  //   return [
  //     Game.DIM_X * Math.random(),
  //     Game.DIM_Y * Math.random()
  //   ];
  // }

  // remove(object) {
  //   if (object instanceof Fireball) {
  //     this.balls.splice(this.balls.indexOf(object), 1);
  //   // } else if (object instanceof Asteroid) {
  //   //   this.asteroids.splice(this.asteroids.indexOf(object), 1);
  //   // } else if (object instanceof Ship) {
  //   //   this.ships.splice(this.ships.indexOf(object), 1);
  //   } else {
  //     throw new Error("unknown type of object");
  //   }
  // }

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
Game.DIM_Y = 700;
Game.FPS = 32;
Game.NUM_BALLS = 100;

module.exports = Game;
