const Fireball = require("./fireball");

class GameView {
  constructor(game, ctx, canvasEl) {
    this.ctx = ctx;
    // this.frog = frog;
    this.game = game;
    // debugger
    this.frog = this.game.addFrog();
    this.canvasEl = canvasEl;
    this.box=document.getElementsByClassName("box")[0];
    let top = this.box.offsetTop;
    let height = this.box.offsetHeight;
    let left = this.box.offsetLeft;
    let width = this.box.offsetWidth;
    this.frogwidth = width;
    this.center = [left+width/2, top+height/2];
    let self = this;
  }


  start() {
    this.game.myLoop(NUM_BALLS);
    this.lastTime = 0;
    // debugger
    requestAnimationFrame(this.animate.bind(this));
  }

    playFireball() {
      let fireaudio = document.getElementById("fireballaudio");
      fireaudio.loop = false;
      fireaudio.play();
    }

  animate(time) {
    if (this.game.pauseGame === false) {
        const timeDelta = time - this.lastTime;
        this.game.step(timeDelta);
    }
    const self = this;
    // debugger
    this.canvasEl.onclick = function(e) {
      if(self.game.pauseGame === false) {
        self.playFireball();
        self.frog.fireBullet(e);
      }
    };
    this.lastTime = time;
    this.game.draw(this.ctx);
    if (this.game.finished === false) {
    requestAnimationFrame(this.animate.bind(this));}
  }
}
const NUM_BALLS = 30;
module.exports = GameView;
