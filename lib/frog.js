// ar this.canvasEl = document.getElementById('this.canvasEl');
// var this.ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
const Fireball = require("./fireball");

class Frog {
    constructor(options) {
      this.cx = options.x;
      this.cy = options.y;
      this.radius = options.radius;
      this.color = options.color;
      this.ctx = options.ctx;
      this.frog = document.getElementById("frog");
      this.skull = document.getElementById("skull");
      this.fireBullet = this.fireBullet.bind(this);
      // debugger
      this.canvasEl = options.canvasEl;
      this.game = options.game;
      // this.angle = options.angle;
      this.nextcolor = "yellow";
      this.futurecolor = "green";
      this.binding();
      // this.render = this.render.bind(this);
      this.calculateAngle = this.calculateAngle.bind(this);
      this.keepball();
      // this.pattern = this.createPattern(ctx);
    }

    binding() {
      const self = this;
      window.addEventListener('mousemove', (e) => {
        self.calculateAngle(e);
      });
    }

    move() {

    }

    calculateAngle(e) {
      // debugger
      let top = this.canvasEl.height/2 - 65;
     let height = this.canvasEl.height;
     let left = this.canvasEl.width/2 - 65;
      let width = this.canvasEl.width;
     let center = [left+width/2, top+height/2];
      if (!e) return;
      // debugger
      // let rect = this.canvasEl.getBoundingClientRect(),
        let  vx = e.layerX - this.cx;
        let  vy = e.layerY - this.cy;
          // console.log(e);
      this.angle = Math.atan2(-vx,vy);
      // console.log('clientx:'+e.layerX + ',clienty:'+e.layerY);
      // console.log('cx:'+this.cx+',this.cy'+this.cy);
      // console.log(this.angle);
// debugger
    }


    draw() {
      // const pattern = this.createPattern(this.ctx);
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.translate(this.canvasEl.width/2, this.canvasEl.height/2);
    this.ctx.rotate(this.angle);
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 65, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.clip();

    // this.ctx.drawImage(thumbImg, 0, 0, 50, 50);
    this.ctx.drawImage(this.frog, - 75,  - 65, 150,130);
    // this.ctx.rotate(30);
    this.ctx.stroke();
    this.ctx.restore();

    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.translate(this.canvasEl.width/2 - 160, this.canvasEl.height/2-40);
    this.ctx.beginPath();
    // this.ctx.fillStyle = "white";
    this.ctx.arc(0, 0, 68, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.clip();
    this.ctx.drawImage(this.skull, - 75,  - 65, 150,130);
    this.ctx.stroke();
    this.ctx.restore();

    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.translate(this.canvasEl.width/2, this.canvasEl.height/2);
    this.ctx.rotate(this.angle);
    this.ctx.beginPath();
    // this.ctx.fillStyle=pattern;
    // this.ctx.arc(Math.cos(this.angle), Math.sin(this.angle) + 40, 20, 0, Math.PI * 2, true);
    this.ctx.arc(Math.cos(this.angle), Math.sin(this.angle) + 40, 20, 0, Math.PI * 2, true);
    // this.ctx.translate(Math.cos(this.angle), Math.sin(this.angle));
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
    tCtx.fillStyle = this.nextcolor;
    tCtx.fillRect(0, 0, 40, 40);
    // tCtx.drawImage(ballbackground,0,0,ballbackground.width,
            // ballbackground.height,0,0,tCtx.canvas.width, tCtx.canvas.height);
            // debugger
    // debugger
    this.ctx.fillStyle = this.ctx.createPattern(tCtx.canvas, "repeat");
    // this.ctx.fillStyle=this.nextcolor;
    // debugger
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();

    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.translate(this.canvasEl.width/2, this.canvasEl.height/2);
    this.ctx.rotate(this.angle);
    this.ctx.beginPath();
    this.ctx.fillStyle=this.futurecolor;
    this.ctx.arc(Math.cos(this.angle), Math.sin(this.angle) - 30, 9, 0, Math.PI * 2, true);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
    }

    futureball() {
      const colorArray = ["yellow", "green", "blue","red"];
      const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
      this.futurecolor = randomColor;
    }

    keepball() {
      // const colorArray = ["red", "green", "blue"];
      // const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
      // this.nextcolor = randomColor;
      this.nextcolor = this.futurecolor;
      this.futureball();
    }



  fireBullet(e) {
    // debugger
    const  vx = e.layerX - this.cx;
    const  vy = e.layerY - this.cy;
    let distance = Math.sqrt( Math.pow(vx,2) + Math.pow(vy,2));
    let velocity = [vx/distance, vy/distance];
    // const colorArray = ["red", "green", "blue"];
    // const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    const randomColor = this.nextcolor;
    // debugger
    const fireball = new Fireball({
      pos: [this.cx, this.cy + Math.sin(this.angle)],
      vel: velocity,
      color: randomColor,
      game: this.game,
      speed: 10,
      ballname:"fireball"
    });
    // debugger
    this.game.add(fireball);
    this.keepball();
  }

}

// var rotatingCircle = new Circle({
//     x: 320,
//   y: 160,
//   radius: 40,
//   color: 'black',
//   angle: Math.random() * Math.PI * 2
// });
//
// function animate() {
//     rotatingCircle.render();
//     requestAnimationFrame(animate);
// }

// animate();
module.exports = Frog;
