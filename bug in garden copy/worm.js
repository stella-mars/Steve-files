// function worm1(lx,ly,rot,sc){
// push();
// translate(lx,ly);
// rotate((radians(rot)));
// scale(sc);



//     sec1(-50,50);
//     sec2(-50,50);
//     sec3(-50,50);
//     sec4(-50,50); 
//     sec5(-50,50);
//     sec6(-50,50);
//     sec7(-50,50);
//     attenaeworm(-50,50);
//     balls(-50,50);
    

// pop();
// }

// function sec1(){

//     strokeWeight(3);
//     fill(161, 66, 245);
//     ellipse(50,50,50,50);
// }   

// function sec2(){

//     strokeWeight(3);
//     fill(96, 66, 245);
//     ellipse(90,50,50,50);
// }   

// function sec3(){

//     strokeWeight(3);
//     fill(66, 245, 96);
//     ellipse(130,50,50,50);
// }

// function sec4(){
    
//         strokeWeight(3);
//         fill(186, 250, 57);
//         ellipse(170,50,50,50);
// }

// function sec5(){
    
//     strokeWeight(3);
//     fill(250, 231, 57);
//     ellipse(210,50,50,50);
// }

// function sec6(){
    
//     strokeWeight(3);
//     fill(250, 160, 57);
//     ellipse(250,50,50,50);
// }

// function sec7(){
    
//     strokeWeight(3);
//     fill(250, 57, 57);
//     ellipse(290,50,50,50);
// }

// function attenaeworm(){
//     fill(0);
//     line(280,25,280,10);

//     fill(0);
//     line(300,25,310,10);
// }

// function balls(){
//    ellipse(280,10,10,10);
//     ellipse(310,10,10,10);
// }


class Worm {
    constructor(x, y, speedX, speedY, size, color) {
      this.x = x;
      this.y = y;
      this.speedX = speedX;
      this.speedY = speedY;
      this.size = size;
      this.color = color;
    }
  
    move() {
      this.x += this.speedX;
      this.y += this.speedY;
  
      // Check boundaries and reverse direction if necessary
      if (this.x < 0 || this.x > width) {
        this.speedX = -this.speedX;
      }
      if (this.y < 0 || this.y > height) {
        this.speedY = -this.speedY;
      }
    }
  
    display() {
      push();
      translate(this.x, this.y);
      fill(this.color);
      ellipse(0, 0, this.size, this.size); // Example section
      ellipse(this.size, 0, this.size, this.size); // Example section
      ellipse(this.size * 2, 0, this.size, this.size); // Example section
      pop();
    }
  }