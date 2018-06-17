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
    this.canvasEl.onclick = function(e) {
      // debugger
      frog.fireBullet(e);
    };
  }


  start() {
    // debugger
    // this.bindKeyHandlers();
    // this.handleClick();
    // debugger
    // this.game.draw(this.ctx);
    // this.circle.render();
    // this.
    this.lastTime = 0;
    // start the animation
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

// GameView.MOVES = {
//   w: [0, -1],
//   a: [-1, 0],
//   s: [0, 1],
//   d: [1, 0],
// };

module.exports = GameView;
