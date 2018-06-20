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
  // init();
  // const game = new Game({ctx:ctx, canvasEl:canvasEl});
  let game = new Game({ctx:ctx, canvasEl:canvasEl});
  // // debugger
  // new GameView(game, ctx, canvasEl).start();
  let startButton = document.getElementById("startGame");
  let aboutButton = document.getElementById("about");
  startButton.addEventListener("click",() => {
  var element = document.getElementById("canvasdiv");
  var about = document.getElementById("aboutdiv");
  var continueButton = document.getElementById("pauseButton");
  continueButton.classList.add("show");
  continueButton.classList.remove("hidden");
  element.classList.remove("hidden");
  element.classList.add("show");
  about.classList.remove("show");
  about.classList.add("hidden");
  if (game.finished === true)game = new Game({ctx:ctx, canvasEl:canvasEl});
  game.finished = false;
  if (game.pauseGame === undefined)startGame(ctx, canvasEl, game);
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
  stopGame(ctx, canvasEl, game);}
  );
});


function startGame(ctx, canvasEl, game) {
  // Game.NUM_BALLS = 25;
  game.pauseGame = false;
  new GameView(game, ctx, canvasEl).start();
}

function stopGame(ctx, canvasEl, game) {
  // Game.NUM_BALLS = 0;
  game.pauseGame = true;
}

// function init() {
//   try {
//     // Fix up for prefixing
//     window.AudioContext = window.AudioContext||window.webkitAudioContext;
//     let audiocontext = new AudioContext();
//   }
//   catch(e) {
//     alert('Web Audio API is not supported in this browser');
//   }
// }
