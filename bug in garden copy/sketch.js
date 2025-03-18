// let worm;
// let wormarray = [];




// function setup(){
// createCanvas(500,500);
// background(0);

// worm = new SCworm(width/2,height/2,0,1);

// wormarray = new Array(10);

// for (let i = 0; i < 10; i++) {
//   let lx = random(width);
//   let ly = random(height);
//   let rot = random(TWO_PI);
//   let sc = random(0.5, 1.5);
//   wormarray.push(new SCworm(lx, ly, rot, sc));
// }

// }


// function draw(){

// background(0);

// worm.draw();

// for(let i = 0; i < wormarray.length; i++){
//   wormarray[i].display();
//   wormarray[i].update();
// }

// }


// class SCworm{

//   constructor(lx,ly,rot,sc){

//     this.lx = lx;
//     this.ly = ly;
//     this.rot = rot;
//     this.sc = sc;

//   }

// update(){


//   this.lx += random(-1,1);
//   this.ly += random(-1,1);
//   this.rot += random(-1,1);
//   this.sc += random(-0.1,0.1);

// if(this.lx > width){
//   this.lx = 0;
// }
// if(this.lx < 0){
//   this.lx = width;
// }
// if(this.ly > height){
//   this.ly = 0;
// }
// if(this.ly < 0){
//   this.ly = height;
// }



// }
// draw(){
// push();
// translate(this.lx,this.ly);
// rotate((radians(this.rot)));
// scale(this.sc);
// fill(0);
// ellipse(0,0,10,10);

// pop();

// }


// display(){
// this.draw();

//   push();
//   translate(this.lx,this.ly);
//   rotate((radians(this.rot)));
//   scale(this.sc);

//   this.sec1(-50,50);
//   this.sec2(-50,50);
//   this.sec3(-50,50);
//   this.sec4(-50,50); 
//   this.sec5(-50,50);
//   this.sec6(-50,50);
//   this.sec7(-50,50);
//   this.attenaeworm(-50,50);
//   this.balls(-50,50);

//   pop();

// }
let worms = [];

function setup() {
  createCanvas(800, 600);

  // Create multiple worms and add them to the worms array
  for (let i = 0; i < 10; i++) {
    let lx = random(width);
    let ly = random(height);
    let rot = random(TWO_PI);
    let sc = random(0.5, 1.5);
    worms.push(new SCworm(lx, ly, rot, sc));
  }
}

function draw() {
  background(255);

  for (let worm of worms) {
    worm.update();
    worm.display();
  }
}

class SCworm {
  constructor(lx, ly, rot, sc) {
    this.lx = lx;
    this.ly = ly;
    this.rot = rot;
    this.sc = sc;
  }

  update() {
    this.lx += random(-1, 1);
    this.ly += random(-1, 1);
    this.rot += random(-1, 1);
    this.sc += random(-0.1, 0.1);

    if (this.lx > width) {
      this.lx = 0;
    }
    if (this.lx < 0) {
      this.lx = width;
    }
    if (this.ly > height) {
      this.ly = 0;
    }
    if (this.ly < 0) {
      this.ly = height;
    }
  }

  draw() {
    push();
    translate(this.lx, this.ly);
    rotate(radians(this.rot));
    scale(this.sc);
    fill(0);
    ellipse(0, 0, 10, 10);
    pop();
  }

  display() {
    this.draw();
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

