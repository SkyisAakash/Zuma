console.log("this is js");
const Game = require("./game");
const GameView = require("./game_view");
const BufferLoader = require("./buffer.js");
//
document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;
  const ctx = canvasEl.getContext("2d");
  const game = new Game({ctx:ctx, canvasEl:canvasEl});
  // debugger
  new GameView(game, ctx, canvasEl).start();


  // window.onload = init;
  var context;
  var bufferLoader;
  function init() {
    // Fix up prefixing
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();

    bufferLoader = new BufferLoader(
      context,
      [
        'https://drive.google.com/uc?export=download&id=16Q6uu_-XYIBcEY5ltNUPfkNvB0uzbJuF'
      ],
      finishedLoading
      );

    bufferLoader.load();
  }

  // window.addEventListener('mousemove', (e) => {
  //   init();
  // });
  function finishedLoading(bufferList) {
  // Create two sources and play them both together.
  var source1 = context.createBufferSource();
  source1.buffer = bufferList[0];
  source1.connect(context.destination);
  source1.start(0);
}

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
