
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
    this.setTimerStatus = "off";
  // this.myLoop(Game.NUM_BALLS);
  this.ballsToRemove = [];
  this.removedBalls = 0;
  this.won = false;
  this.finished = false;
  // this.pauseGame = false;
  let pauseButton = document.getElementById("pauseButton");
  pauseButton.addEventListener("click", () => {
    this.pauseGameFunc();
  });
  let continueButton = document.getElementById("continueButton");
  continueButton.addEventListener("click", () => {
    this.continueGameFunc();
  });
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
      // debugger
      this.balls.splice(this.balls.indexOf(object), 1);
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
    // debugger
    let ballPosition = this.findBallById(id-1);
    this.balls.splice(ballPosition, 0, ball);
    // debugger
  }

  findBallById(id) {
    let ans;
    this.balls.forEach((ball) => {
      if(ball.id === id) ans = this.balls.indexOf(ball);
    });
    return ans;
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
       if (self.pauseGame !== true) {
          self.addBalls(i);
          if (--i)self.myLoop(i);
          } else {
                self.myLoop(i);
              }
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

  getIdsArray(objects) {
    let result = [];
    objects.forEach((object) => result.push(object.id));
    return result;
  }

  explodeBalls() {
    const count = this.ballsToRemove.length;
    let idArray = this.getIdsArray(this.ballsToRemove);
    let max = Math.max(...idArray);
    // if(this.ballsToRemove.length > 0)debugger;
    this.ballsToRemove.forEach((ball) => {
      this.remove(ball);
      this.removedBalls++;
      if(this.balls.length === 0) this.gameOver("won");
      // debugger
    });
    // if(this.ballsToRemove.length > 0)debugger;
    this.ballsToRemove = [];
    this.modifyIds(count, max);
    // debugger
  }

  modifyIds(count, max) {
    this.balls.forEach((ball) => {
      if (ball.id > max) {
        ball.percent = ball.percent - count;
        ball.id = ball.id - count;
      }
    });
  }

  gameOver(won) {
    if (won==="won")this.won = true;
    this.finished = true;
    var pauseButton = document.getElementById("pauseButton");
    pauseButton.classList.remove("show");
    pauseButton.classList.add("hidden");
    // if(this.balls.length === 0)this.won = true;
  }

  draw(ctx) {
    if (this.finished === false) {
        // ctx.clearRect(0,0,Game.DIM_X, Game.DIM_Y);
        let background = new Image();
        background.src = "https://s26.postimg.cc/5h6eipprd/spiral_for_Aakash2.png";
        ctx.drawImage(background,0,0,background.width,background.height,0,0,this.canvasEl.width, this.canvasEl.height);
        this.allObjects().forEach((object) => {
          object.draw(ctx);
        });
  } else if(this.finished === true) {
        // debugger
        this.pauseGame = undefined;
        ctx.font = "900 50px Arial";
        ctx.textAlign = "center";
        let text1;
        let text2;
        ctx.fillStyle = "brown";
        ctx.shadowColor = "yellow";
        ctx.shadowBlur = 24;
        if(this.won === false) {
          text1 = `You lost by ${this.balls.length} balls`;
          text2 = `But hey, you got ${this.removedBalls} balls`;
        }
        else if(this.won === true) {
          text1 = `Yaay, You won!`;
          text2 = "";
        }
        ctx.fillText(text1, this.canvasEl.width/2,50);
        ctx.fillText(text2, this.canvasEl.width/2,150);
      }
  }

  moveObjects(delta) {
    this.allObjects().forEach((object) => {
      object.move(delta);
    });
  }

  step(delta) {
    // console.log(this.ballsToRemove);

    // if (this.pauseGame === false) {
    this.moveObjects(delta);
    this.explodeBalls();
    // debugger
    // if(this.balls.length === 0) this.gameOver();
    // debugger
  // }
  }

  pauseGameFunc() {
    // debugger
    this.pauseGame = true;
    var pause = document.getElementById("pauseButton");
    var conti = document.getElementById("continueButton");
    conti.classList.remove("hidden");
    conti.classList.add("show");
    pause.classList.remove("show");
    pause.classList.add("hidden");
  }

  continueGameFunc() {
    // debugger
    this.pauseGame = false;
    var pause = document.getElementById("pauseButton");
    var conti = document.getElementById("continueButton");
    pause.classList.remove("hidden");
    pause.classList.add("show");
    conti.classList.remove("show");
    conti.classList.add("hidden");
  }

}

Game.BG_COLOR = "yellow";
Game.DIM_X = 1000;
Game.DIM_Y = 700;
// Game.FPS = 62;
Game.NUM_BALLS = 25;

module.exports = Game;
