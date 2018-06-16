const Ball = require("./ball");

class GameView {
  constructor(game, ctx, canvasEl, frog) {
    this.ctx = ctx;
    this.frog = frog;
    this.game = game;
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
  }

//   handleClick() {
//     // debugger
//   this.canvasEl.onclick = function(e) {
//     // debugger
//     // console.log(e.clientX, e.clientY);
//     let angle = 180 +  Math.atan2(e.clientX- this.center[0],- (e.clientY- this.center[1]) )*(180/Math.PI);
//     console.log(angle, e.clientX, e.clientY);
//     let distancex = e.clientX- this.center[0];
//     let distancey = e.clientY- this.center[1];
//     let distance = Math.sqrt( Math.pow((e.clientX - this.center[0]),2) + Math.pow((e.clientY- this.center[1]),2));
//     let velocity = [distancex/distance, distancey/distance];
//     console.log(velocity);
//     let ball = new Ball({game: this.game, vel:velocity, speed: 15, pos:[this.canvasEl.width/2, this.canvasEl.height/2], color: "green"});
//     this.game.add(ball);
//     // this.game.draw(this.ctx);
//     console.log("sholdve added ball");
//   }.bind(this);
// }

// putfrog() {
//   // debugger
//   // this.ctx.drawImage(this.frog, 10, 10);
//   // debugger
//   // this.ctx.fillStyle = "purple";
// // this.ctx.fillRect(0, 0, 50, 50);
// // debugger
//   // var box=document.getElementsByClassName("box")[0];
//   // let top = box.offsetTop;
//   // let height = box.offsetHeight;
//   // let left = box.offsetLeft;
//   // let width = box.offsetWidth;
//   // let center = [left+width/2, top+height/2];
//   let angle;
//
//   this.canvasEl.onmousemove = function(e) {
//     angle = 180 +  Math.atan2(e.clientX- this.center[0],- (e.clientY- this.center[1]) )*(180/Math.PI);
//     // console.log(angle);
//     this.box.style.webkitTransform = 'rotate(' + angle + 'deg)';
//     this.box.style.mozTransform =  'rotate(' + angle + 'deg)';
//     this.box.style.transform =  'rotate(' + angle + 'deg)';
//   }.bind(this);
// }

  // bindKeyHandlers() {
  //   const ship = this.ship;
  //
  //   Object.keys(GameView.MOVES).forEach((k) => {
  //     const move = GameView.MOVES[k];
  //     key(k, () => { ship.power(move); });
  //   });
  //
  //   key("space", () => { ship.fireBullet(); });
  // }

  start() {
    // debugger
    // this.bindKeyHandlers();
    // this.handleClick();
    // debugger
    // this.game.draw(this.ctx);
    // this.circle.render();
    // this.
    // this.lastTime = 0;
    // start the animation
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    // debugger
    const timeDelta = time - this.lastTime;

    // this.game.step(timeDelta);
    this.lastTime = time;

    this.game.draw(this.ctx);
    // this.circle.render();
    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
  }
}

GameView.MOVES = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
};

module.exports = GameView;
