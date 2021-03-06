// console.log("this is js");
const Game = require("./game");
const GameView = require("./game_view");

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
    init();
      started = "true";
      speakerbutton();
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

function speakerbutton() {
  const mute = document.getElementById("mutedspeaker");
  const unmute = document.getElementById("speakeron");
  unmute.addEventListener("click", () => {
    unmute.classList.remove("show");
    unmute.classList.add("hidden");
    mute.classList.remove("hidden");
    mute.classList.add("show");
    document.getElementById("audio").muted = false;
    document.getElementById("fireballaudio").muted = false;
  });
  mute.addEventListener("click", () => {
    mute.classList.remove("show");
    mute.classList.add("hidden");
    unmute.classList.remove("hidden");
    unmute.classList.add("show");
    document.getElementById("audio").muted = true;
    document.getElementById("fireballaudio").muted = true;
  });
}

function init() {
// document.getElementById("mutedspeaker").classList.add("show");
// document.getElementById("speakeron").classList.add("hidden");
document.getElementById("audio").play();
}
