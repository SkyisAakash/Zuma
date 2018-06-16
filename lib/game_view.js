const Ball = require("./ball");


class GameView {
  constructor(game, ctx, canvasEl) {
    this.ctx = ctx;
    this.game = game;
    this.canvasEl = canvasEl;
    this.box=document.getElementsByClassName("box")[0];
    let top = this.box.offsetTop;
    let height = this.box.offsetHeight;
    let left = this.box.offsetLeft;
    let width = this.box.offsetWidth;
    this.center = [left+width/2, top+height/2];

    // this.ship = this.game.addShip();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // debugger
  this.canvasEl.onclick = function(e) {
    // debugger
    // console.log(e.clientX, e.clientY);
    let angle = 180 +  Math.atan2(e.clientX- this.center[0],- (e.clientY- this.center[1]) )*(180/Math.PI);
    console.log(angle, e.clientX, e.clientY);
    let distancex = e.clientX- this.center[0];
    let distancey = e.clientY- this.center[1];
    // let bigger = (distancex > distancey) ? distancex : distancey;
    let distance = Math.sqrt( Math.pow((e.clientX - this.center[0]),2) + Math.pow((e.clientY- this.center[1]),2));
    // let distance = sqrt((x - x_2) ** 2 + (y_1 - y_2) ** 2)
    let velocity = [distancex/distance, distancey/distance];
    // let velocity = [distancex, distancey].scaleBetween(-5,5);
    console.log(velocity);
    let ball = new Ball({game: this.game, vel:velocity, speed: 15, pos:[this.center[0], this.center[1]], color: "green"});
    this.game.add(ball);
    // this.game.draw(this.ctx);
    console.log("sholdve added ball");
  }.bind(this);
}

putfrog() {
  // var box=document.getElementsByClassName("box")[0];
  // let top = box.offsetTop;
  // let height = box.offsetHeight;
  // let left = box.offsetLeft;
  // let width = box.offsetWidth;
  // let center = [left+width/2, top+height/2];
  let angle;

  this.canvasEl.onmousemove = function(e) {
    angle = 180 +  Math.atan2(e.clientX- this.center[0],- (e.clientY- this.center[1]) )*(180/Math.PI);
    // console.log(angle);
    this.box.style.webkitTransform = 'rotate(' + angle + 'deg)';
    this.box.style.mozTransform =  'rotate(' + angle + 'deg)';
    this.box.style.transform =  'rotate(' + angle + 'deg)';
  }.bind(this);
}

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
    this.handleClick();
    this.putfrog();
    // this.
    // this.lastTime = 0;
    this.game.draw(this.ctx);
    // start the animation
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    // debugger
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.lastTime = time;

    this.game.draw(this.ctx);
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
