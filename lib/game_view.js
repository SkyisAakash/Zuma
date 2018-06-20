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
    // this.ship = this.game.addShip();
    // this.handleClick = this.handleClick.bind(this);
    const frog = this.frog;
    let self = this;
    this.canvasEl.onclick = function(e) {
      self.game.backgroundsound.play();
      frog.fireBullet(e);
    };
  }


  start() {
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    // debugger
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.lastTime = time;

    this.game.draw(this.ctx);
    // this.circle.render();
    // every call to animate requests causes another call to animate

    requestAnimationFrame(this.animate.bind(this));
  }
}

module.exports = GameView;
