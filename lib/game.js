// const Asteroid = require("./asteroid");
// const Bullet = require("./bullet");
// const Ship = require("./ship");
const Fireball = require("./fireball");
const Ball = require("./balls");
const Frog = require("./frog");
require('howler');
class Game {
  constructor(options) {
    // this.asteroids = [];
    this.frog = [];
    this.ctx = options.ctx;
    this.balls = [];
    this.fireball = [];
    this.canvasEl = options.canvasEl;
    this.backgroundsound = new Howl({
      src: ['https://drive.google.com/uc?export=download&id=16Q6uu_-XYIBcEY5ltNUPfkNvB0uzbJuF'],
      autoplay: true,
      loop: true,
      // onload: this.initial
      volume: .1
    });
    this.setTimerStatus = "off";
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
  remove(object) {
    if (object instanceof Fireball) {
      this.fireball.splice(this.fireball.indexOf(object), 1);
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

  setTargetBall(ball){
    this.targetball = ball;
  }


  makenewBall(id, pos, color){
    this.add(new Ball({ game: this,
                          vel:[0,1],
                          pos:pos,
                          speed:0.1, color: color, ballname:"ball",
                        id: id }));
  }

  addBalls(id) {
    const colorArray = ["yellow", "green", "blue","red"];
    const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.add(new Ball({ game: this,
                          vel:[0,1],
                          pos:[this.canvasEl.width-180,0],
                          speed:0.1, color: randomColor, ballname:"ball",
                        id: id }));
                        // console.log(id);
}

toggleTimerStatus(value){
  this.setTimerStatus = value;//(this.setTimerStatus === "off") ? "on" : "off";
}

  myLoop (i) {
    let self = this;
   setTimeout(function () {
     if(self.setTimerStatus === "off") {
      self.addBalls(i);
      if (--i)self.myLoop(i);
    }
    else {
      self.myLoop(i);
    }
  }, 450);
}

  allObjects() {
    // debugger
    // console.log(this.fireball);
    const allOfEm = [].concat(this.frog, this.fireball, this.balls);
    // console.log(allOfEm);
    return allOfEm;
  }


  draw(ctx) {
    let background = new Image();
    background.src = "https://s26.postimg.cc/g1ewr6kt5/spiral.jpg";
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.drawImage(background,0,0,background.width,background.height,0,0,this.canvasEl.width, this.canvasEl.height);
    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  // isOutOfBounds(pos) {
  //   return (pos[0] < 0) || (pos[1] < 0) ||
  //     (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  // }

  moveObjects(delta) {
    console.log(this.targetball);
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
// Game.FPS = 62;
Game.NUM_BALLS = 100;

module.exports = Game;
