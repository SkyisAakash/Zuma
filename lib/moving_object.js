// const Ball = require("./balls");
// const Ball = require("./balls");

class MovingObject {
  constructor(options) {
    this.id = options.id;
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    this.isWrappable = true;
    this.speed = options.speed;
    this.ballname = options.ballname;
    this.percent = 0;
    this.direction = 1;
    this.stopTimerStatus = "off";  }

  collideWith(otherObject) {
    // default do nothing
  }

  draw(ctx) {
    // debugger
    ctx.save();
    ctx.translate(this.pos[0], this.pos[1]);
    // ctx.translate(this.pos[0] - 20, this.pos[0] - 20);
    ctx.beginPath();
    ctx.arc(
      0, 0, this.radius, 0, 2 * Math.PI, true
      // 20, 20, this.radius, 0, 2 * Math.PI, true
    );
    ctx.translate(-20, -20);
    let tCtx = document.createElement("canvas").getContext("2d");
            tCtx.canvas.width = 40;
            tCtx.canvas.height = 40;
    let ballbackground = new Image();
    if (this.color === "green"){
    ballbackground.src = "https://s26.postimg.cc/fl2vwj1mh/greenball.png";}
    else if (this.color === "yellow"){
    ballbackground.src = "https://s26.postimg.cc/if61a18yh/yellowball.png";}
    else if (this.color === "blue"){
    ballbackground.src = "https://s26.postimg.cc/xb4khn7ih/blueball.jpg";}
    else if (this.color === "red"){
    ballbackground.src = "https://s26.postimg.cc/6c165she1/redball.jpg";}
    tCtx.drawImage(ballbackground,0,0,ballbackground.width,
            ballbackground.height,0,0,tCtx.canvas.width, tCtx.canvas.height);
    ctx.fillStyle = ctx.createPattern(tCtx.canvas, "no-repeat");
    ctx.fill();
    ctx.restore();

  }

  getQuadraticBezierXYatPercent(startPt,controlPt,endPt,percent) {
      var x = Math.pow(1-percent,2) * startPt.x + 2 * (1-percent) * percent * controlPt.x + Math.pow(percent,2) * endPt.x;
      var y = Math.pow(1-percent,2) * startPt.y + 2 * (1-percent) * percent * controlPt.y + Math.pow(percent,2) * endPt.y;
      return( {x:x,y:y} );
  }

  getLineXYatPercent(startPt,endPt,percent) {
        var dx = endPt.x-startPt.x;
        var dy = endPt.y-startPt.y;
        var X = startPt.x + dx*percent;
        var Y = startPt.y + dy*percent;
        return( {x:X,y:Y} );
    }
  getCircle1XYatPercent(startPt,endPt,percent) {
    // console.log(percent);
        let positionangle = Math.PI*percent;
        var centerx = 490;
        var centery = 350;
        var X = centerx + Math.cos(positionangle) * 320;
        var Y = centery + Math.sin(positionangle) * 320;
        return( {x:X,y:Y} );
    }
  getCircle2XYatPercent(startPt,endPt,percent){
        let positionangle = Math.PI*percent;
        var centerx = 440;
        var centery = 350;
        var X = centerx - Math.cos(positionangle) * 270;
        var Y = centery - Math.sin(positionangle) * 270;
        return( {x:X,y:Y} );
    }

  getCircle3XYatPercent(startPt,endPt,percent){
        let positionangle = Math.PI*percent;
        var centerx = 480;
        var centery = 350;
        var X = centerx + Math.cos(positionangle) * 230;
        var Y = centery + Math.sin(positionangle) * 230;
        return( {x:X,y:Y} );
    }
  getCircle4XYatPercent(startPt,endPt,percent){
        let positionangle = Math.PI*percent;
        var centerx = 450;
        var centery = 350;
        var X = centerx - Math.cos(positionangle) * 200;
        var Y = centery - Math.sin(positionangle) * 200;
        return( {x:X,y:Y} );
    }
  getCircle5XYatPercent(startPt,endPt,percent){
        let positionangle = Math.PI*percent;
        var centerx = 480;
        var centery = 350;
        var X = centerx + Math.cos(positionangle) * 170;
        var Y = centery + Math.sin(positionangle) * 170;
        return( {x:X,y:Y} );
    }

  move(timeDelta) {
    if (this.stopTimer > 1) {
      this.game.toggleTimerStatus("on");
    } else if (this.stopTimer === undefined){
      this.game.toggleTimerStatus("off");
    } else {
      this.game.toggleTimerStatus("off");
    }
    if (this.ballname === "fireball"){
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
        offsetX = this.vel[0] * velocityScale * this.speed,
        offsetY = this.vel[1] * velocityScale * this.speed;
        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
        //check for collision
        this.game.balls.forEach((ball) => {
          let position = ball.pos;
          let distanceX = Math.abs(this.pos[0] - ball.pos[0]);
          let distanceY = Math.abs(this.pos[1] - ball.pos[1]);
          let distanceR =  Math.sqrt( Math.pow(distanceX,2) + Math.pow(distanceY,2));
          if (distanceR < 40 && !this.collided){
            this.targetball = ball.id;
            // console.log(this.targetball);
            this.game.makenewBall(this.targetball, this.pos, this.color);
            this.collided = true;
            this.game.setTargetBall(this.targetball);
            this.game.remove(this);
        }
        });
        // this.game.balls.forEach((ball) => {
        //   if(ball.id <= this.targetball)ball.id--;
        // });
    }
    else if(this.ballname === "ball") {
      if (this.game.targetball === 0) {
        this.stopTimerStatus = "off";
      }
      if (this.id < this.game.targetball){
        // debugger
          this.setStopTimer();
          // if (this.stopTimer === 0) {
          //   this.resetStopTimer();
          //   this.game.setTargetBall(0);
          //  }
          this.percent = this.percent;
      }
      else {
        this.percent += this.speed;
      }
      if(this.percent<0) { this.percent=0; this.direction=1; }
      let xy;
      if(this.percent<25){
             let usepercent=this.percent/24;
             xy=this.getLineXYatPercent({x:820,y:-50},{x:810,y:335},usepercent);
         }
      else if(this.percent<75){
             let usepercent=(this.percent-25)/50;
             xy=this.getCircle1XYatPercent({x:820,y:360},{x:180,y:360},usepercent);
         }
      else if(this.percent<115){
             let usepercent=(this.percent-75)/40;
             xy=this.getCircle2XYatPercent({x:180,y:360},{x:770,y:360},usepercent);
         }

      else if(this.percent<145){
             let usepercent=(this.percent-115)/30;
             xy=this.getCircle3XYatPercent({x:770,y:360},{x:200,y:360},usepercent);
         }

      else if(this.percent<171){
             let usepercent=(this.percent-145)/26;
             xy=this.getCircle4XYatPercent({x:200,y:360},{x:750,y:360},usepercent);
         }

      else if(this.percent<191){
             let usepercent=(this.percent-171)/20;
             xy=this.getCircle5XYatPercent({x:750,y:360},{x:230,y:360},usepercent);
         }
         else window.alert("game over");
      // console.log(this.pos);
      this.pos = [xy.x,xy.y];
      this.angle += 1;
      if (this.angle === 180)this.angle = 0;
    }
  }

  remove() {
    this.game.remove(this);
  }

  setStopTimer() {
    // debugger
    if (this.stopTimerStatus !== "on") {
      this.stopTimer = 25;
      this.stopTimerStatus = "on";
      // debugger
    }
    else {
      this.stopTimer--;
      if (this.stopTimer === 0) {
        // debugger
        this.stopTimerStatus = "off";
        this.game.setTargetBall(0);
      }
    }
  }
//   resetStopTimer() {
//     this.stopTimer = undefined;
//     this.stopTimerStatus = "off";
//   }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

module.exports = MovingObject;
