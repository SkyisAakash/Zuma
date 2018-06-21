// console.log("this is js");
const Game = require("./game");
const GameView = require("./game_view");
const BufferLoader = require("./buffer.js");
//
document.addEventListener("DOMContentLoaded", () => {
  let started = "false";
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;
  const ctx = canvasEl.getContext("2d");
  let game = new Game({ctx:ctx, canvasEl:canvasEl});
  let startButton = document.getElementById("startGame");
  let aboutButton = document.getElementById("about");
  startButton.addEventListener("click",() => {
      started = "true";
      init();
      var element = document.getElementById("canvasdiv");
      var about = document.getElementById("aboutdiv");
      var continueButton = document.getElementById("pauseButton");
      continueButton.classList.add("show");
      continueButton.classList.remove("hidden");
      element.classList.remove("hidden");
      element.classList.add("show");
      about.classList.remove("show");
      about.classList.add("hidden");
      if (game.finished === true) {
        // ctx.clearRect(0,0,Game.DIM_X, Game.DIM_Y);
        game = new Game({ctx:ctx, canvasEl:canvasEl});
      }
      game.finished = false;
      // debugger
      if (game.pauseGame === undefined) {
        // debugger
        startGame(ctx, canvasEl, game);
      }
      else {
          game.pauseGame = false;
          game.continueGameFunc();
        }
      }
  );
  aboutButton.addEventListener("click",() => {
  var element = document.getElementById("canvasdiv");
  var about = document.getElementById("aboutdiv");
  var continueButton = document.getElementById("continueButton");
  continueButton.classList.remove("show");
  continueButton.classList.add("hidden");
  var pauseButton = document.getElementById("pauseButton");
  pauseButton.classList.remove("show");
  pauseButton.classList.add("hidden");
  element.classList.remove("show");
  element.classList.add("hidden");
  about.classList.remove("hidden");
  about.classList.add("show");
  // debugger
  if (started === "true")stopGame(ctx, canvasEl, game);}
  );
});


function startGame(ctx, canvasEl, game) {
  // Game.NUM_BALLS = 25;
  game.pauseGame = false;
  // debugger
  let view = new GameView(game, ctx, canvasEl);
  view.start();
}

function stopGame(ctx, canvasEl, game) {
  // Game.NUM_BALLS = 0;
  game.pauseGame = true;
}
// let context;
// let bufferLoader;
//   let url = URL.createObjectURL('../tracks/zuma_track.mp3');
// function init() {
//   window.AudioContext = window.AudioContext || window.webkitAudioContext;
//   context = new AudioContext();
//   bufferLoader = new BufferLoader(
//     context,
//     [
//       // 'https://drive.google.com/uc?export=download&id=16Q6uu_-XYIBcEY5ltNUPfkNvB0uzbJuF'
//       url
//     ],
//     finishedLoading
//     );
//   bufferLoader.load();
// }
function init() {
document.getElementById("audio").play();
}
//
// function finishedLoading(bufferList) {
//   var source1 = context.createBufferSource();
//   source1.buffer = bufferList[0];
//   source1.connect(context.destination);
//   source1.start(0);
// }
