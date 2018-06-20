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
  // // debugger
  // new GameView(game, ctx, canvasEl).start();
  let startButton = document.getElementById("startGame");
  startButton.addEventListener("click",() => {
  startGame(ctx, canvasEl);}
  );
});


function startGame(ctx, canvasEl) {
  const game = new Game({ctx:ctx, canvasEl:canvasEl});
  // debugger
  new GameView(game, ctx, canvasEl).start();
}
