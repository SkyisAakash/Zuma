
const Fireball = require("./fireball");
const Ball = require("./balls");
const Frog = require("./frog");
require('howler');
class Game {
  constructor(options) {
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
  this.myLoop(Game.NUM_BALLS);
  // this.moreballs();
  // });
}



  add(object) {
    if (object instanceof Frog) {
      this.frog.push(object);
    } else if (object instanceof Fireball) {
      this.fireball.push(object);
    } else if (object instanceof Ball) {
      this.balls.push(object);
    } else {
      throw new Error("unknown type of object");
    }
  }
  remove(object) {
    // debugger
    if (object instanceof Fireball) {
      this.fireball.splice(this.fireball.indexOf(object), 1);
    } else if (object instanceof Ball) {
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


  makenewBall(id, pos, color, percent){
    // debugger
    let ball = new Ball({ game: this,
                          percent: percent,
                          vel:[0,1],
                          pos:pos,
                          speed:0.1, color: color, ballname:"ball",
                        id: id });
    this.balls.forEach((ba) => {
      if(ba.id >= id)ba.id++;
    });
    this.balls.splice(11-id, 0, ball);
    // debugger
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
    const allOfEm = [].concat(this.frog, this.fireball, this.balls);
    return allOfEm;
  }

  getBallsToRemove(balls) {
    this.ballsToRemove = balls;
  }

  explodeBalls() {
    this.ballsToRemove.forEach((ball) => this.remove(ball));
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

  moveObjects(delta) {
    // console.log(this.ballsToRemove);
    this.allObjects().forEach((object) => {
      object.move(delta);
    });
  }

  step(delta) {
    this.moveObjects(delta);
    // this.checkCollisions();
  }

}

Game.BG_COLOR = "yellow";
Game.DIM_X = 1000;
Game.DIM_Y = 700;
// Game.FPS = 62;
Game.NUM_BALLS = 10;

module.exports = Game;
