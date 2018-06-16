console.log("this is js");

document.addEventListener("DOMContentLoaded", function(){
  const can = document.getElementById("game-canvas");
  can.width = 1200;
  can.height = 750;

  const ctx = can.getContext("2d");
  // window.setInterval( () => {
  //   game.draw(ctx);
  //   game.move();
  // }, 10);
    ctx.clearRect(0, 0, 1200, 750);
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, 1200, 750);
});

var box=document.getElementsByClassName("box")[0];
let top = box.offsetTop;
let height = box.offsetHeight;
let left = box.offsetLeft;
let width = box.offsetWidth;
let center = [left+width/2, top+height/2];
let angle;
let can = document.getElementById("game-canvas");
can.onmousemove = function(e) {
  angle =  Math.atan2(e.clientX- center[0],- (e.clientY- center[1]) )*(180/Math.PI);
  console.log(angle);
  box.style.webkitTransform = 'rotate(' + angle + 'deg)';
  box.style.mozTransform =  'rotate(' + angle + 'deg)';
  box.style.transform =  'rotate(' + angle + 'deg)';
};
