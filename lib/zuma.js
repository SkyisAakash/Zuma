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
  // const game = new Game({ctx:ctx, canvasEl:canvasEl});
  const game = new Game({ctx:ctx, canvasEl:canvasEl});
  // // debugger
  // new GameView(game, ctx, canvasEl).start();
  let startButton = document.getElementById("startGame");
  let aboutButton = document.getElementById("about");
  startButton.addEventListener("click",() => {
  var element = document.getElementById("canvasdiv");
  var about = document.getElementById("aboutdiv");
  element.classList.remove("hidden");
  element.classList.add("show");
  about.classList.remove("show");
  about.classList.add("hidden");
  startGame(ctx, canvasEl, game);}
  );
  aboutButton.addEventListener("click",() => {
  var element = document.getElementById("canvasdiv");
  var about = document.getElementById("aboutdiv");
  element.classList.remove("show");
  element.classList.add("hidden");
  about.classList.remove("hidden");
  about.classList.add("show");
  stopGame(ctx, canvasEl, game);}
  );
});


function startGame(ctx, canvasEl, game) {
  // Game.NUM_BALLS = 25;
  new GameView(game, ctx, canvasEl).start();
}

function stopGame(ctx, canvasEl, game) {
  // Game.NUM_BALLS = 0;
  new GameView(game, ctx, canvasEl);
}
