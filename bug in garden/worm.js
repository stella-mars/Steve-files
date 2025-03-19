class Worm {
// lx;
// ly;
// rot;
// sc;
// speedX;
// speedY;




  constructor(lx, ly, rot, sc, speedX, speedY) {
      this.lx = lx;
      this.ly = ly;
      this.rot = rot;
      this.sc = sc;
      this.speedX = speedX;
      this.speedY = speedY;
  }

  update() {
      this.lx += this.speedX;
      this.ly += this.speedY;

      
      if (this.lx < 0 || this.lx > width) {
          this.speedX = -this.speedX;
      }
      if (this.ly < 0 || this.ly > height) {
          this.speedY = -this.speedY;
      }
  }

  display() {
      push();
      translate(this.lx, this.ly);
      rotate(this.rot);
      scale(this.sc);

      this.sec1();
      this.sec2();
      this.sec3();
      this.sec4();
      this.sec5();
      this.sec6();
      this.sec7();
      this.attenaeworm();
      this.balls();

      pop();
  }



sec1(){

  strokeWeight(3);
  fill(161, 66, 245);
  ellipse(50,50,50,50);
}   

sec2(){

  strokeWeight(3);
  fill(96, 66, 245);
  ellipse(90,50,50,50);
}   

sec3(){

  strokeWeight(3);
  fill(66, 245, 96);
  ellipse(130,50,50,50);
}

sec4(){
  
      strokeWeight(3);
      fill(186, 250, 57);
      ellipse(170,50,50,50);
}

sec5(){
  
  strokeWeight(3);
  fill(250, 231, 57);
  ellipse(210,50,50,50);
}

sec6(){
  
  strokeWeight(3);
  fill(250, 160, 57);
  ellipse(250,50,50,50);
}

sec7(){
  
  strokeWeight(3);
  fill(250, 57, 57);
  ellipse(290,50,50,50);
}

attenaeworm(){
  fill(0);
  line(280,25,280,10);

  fill(0);
  line(300,25,310,10);
}

balls(){
 ellipse(280,10,10,10);
  ellipse(310,10,10,10);
}

}