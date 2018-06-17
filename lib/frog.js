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
      this.fireBullet = this.fireBullet.bind(this);
      // debugger
      this.canvasEl = options.canvasEl;
      this.game = options.game;
      // this.angle = options.angle;
      this.nextcolor = "red";
      this.binding();
      this.render = this.render.bind(this);
      this.calculateAngle = this.calculateAngle.bind(this);
      this.keepball();
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


    render() {
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.beginPath();
      this.ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.strokeStyle = '#09f';
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
      this.renderEye();

    }

    draw() {
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
    this.ctx.translate(this.canvasEl.width/2, this.canvasEl.height/2);
    this.ctx.rotate(this.angle);
    this.ctx.beginPath();
    this.ctx.fillStyle=this.nextcolor;
    this.ctx.arc(Math.cos(this.angle), Math.sin(this.angle) + 40, 20, 0, Math.PI * 2, true);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
    }

    keepball() {
      const colorArray = ["red", "green", "blue"];
      const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
      this.nextcolor = randomColor;
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
      pos: [this.cx, this.cy],
      vel: velocity,
      color: randomColor,
      game: this.game,
      speed: 10
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
