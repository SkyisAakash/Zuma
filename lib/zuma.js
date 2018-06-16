console.log("this is js");

const Game = require("./game");
const GameView = require("./game_view");
//
document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  // debugger
  new GameView(game, ctx, canvasEl).start();


  // let can = document.getElementById("game-canvas");
  // debugger
  // canvasEl.onclick = function(e) {
  // debugger
  // console.log(e.clientX, e.clientY);
  // };
// var box=document.getElementsByClassName("box")[0];
// let top = box.offsetTop;
// let height = box.offsetHeight;
// let left = box.offsetLeft;
// let width = box.offsetWidth;
// let center = [left+width/2, top+height/2];
// let angle;
//
// canvasEl.onmousemove = function(e) {
//   angle = 180 +  Math.atan2(e.clientX- center[0],- (e.clientY- center[1]) )*(180/Math.PI);
//   // console.log(angle);
//   box.style.webkitTransform = 'rotate(' + angle + 'deg)';
//   box.style.mozTransform =  'rotate(' + angle + 'deg)';
//   box.style.transform =  'rotate(' + angle + 'deg)';
// };

});
