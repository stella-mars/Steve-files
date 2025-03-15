let numAliens = 3; 
let bounceX = [];
let bounceY = [];
let bounceVX = [];
let bounceVY = [];




function setup() {
  createCanvas(500, 500);
  background(20);
  fill(255);

 
  for (let i = 0; i < numAliens; i++) {
    bounceX[i] = random(width);
    bounceY[i] = random(height);
    bounceVX[i] = random(-3, 3);
    bounceVY[i] = random(-3, 3);
  }

  speedx = random(-5, 5);
    speedy = random(-5, 5);
    lox = height / 2;
    loy = width / 2;
   
    console.log(speedx + " " + speedy);
}

function draw() {
  background(20); 



  alienSC(1, width / 2, height / 2, 0, 1, false, false); 

  let angle = frameCount * 0.1;
  let angle2 = frameCount * 0.1;
  alienSC(1, 400, 350, 0, 0.5, true,);
  alienSC(1, width / 5, height / 5, angle, 0.75, false, false);

  for (let i = 0; i < numAliens; i++) {
    bounceX[i] += bounceVX[i];
    bounceY[i] += bounceVY[i];

    
    if (bounceX[i] > width || bounceX[i] < 0) {
      bounceVX[i] *= -1;
    }
    if (bounceY[i] > height || bounceY[i] < 0) {
      bounceVY[i] *= -1;
    }
     
     alienSC(1, bounceX[i], bounceY[i], angle * 2, 0.25, false,); //bouncing aliens
    }

    alien2SC(1, 250, 250, angle2, 0.5)
  
  }
  
  // Parent 
  function alienSC(k, lx, ly, rot, sc, isShaking) {
    push(); 

    if (isShaking) {
      lx += random(-5,5);
      ly += random(-5,5);
    }

    translate(lx, ly); 
    rotate(rot);
    scale(sc); 
    bodySC(k);
    headSC(k, 0, -75); 
    eyesSC(k, -20, -90, 20, -90); 
    antennaeSC(k, -30, -110, 30, -110); 
    armSC(k, -60, -25);
    armSC(k, 40, -25);
    pop();
  }
  
  //Child
  function bodySC(k) {
    push();
    fill(0, 255, 0);
    ellipse(0, 0, 100 * k, 150 * k); 
    pop();
  }
  
  // Child 
  function headSC(k, x, y) {
    push();
    fill(0, 255, 0);
    ellipse(x, y, 80 * k, 80 * k); // Head
    pop();
  }
  
  // Child 
  function eyesSC(k, x1, y1, x2, y2) {
    push();
    fill(255);
    ellipse(x1, y1, 20 * k, 20 * k); // L Eye
    ellipse(x2, y2, 20 * k, 20 * k); // R Eye
    fill(0);
    ellipse(x1, y1, 10 * k, 10 * k); // L Pupil
    ellipse(x2, y2, 10 * k, 10 * k); // R Pupil
    pop();
  }

  // Child 
function antennaeSC(k, x1, y1, x2, y2) {
  push();
  stroke(0, 255, 0);
  line(x1, y1, x1 + 10 * k, y1 - 30 * k); // L Antenna
  line(x2, y2, x2 - 10 * k, y2 - 30 * k); // R Antenna
  noStroke();
  fill(0, 255, 0);
  ellipse(x1 + 10 * k, y1 - 30 * k, 10 * k, 10 * k); // L Antenna Point
  ellipse(x2 - 10 * k, y2 - 30 * k, 10 * k, 10 * k); // R Antenna Point
  pop();
}

// Child 
function armSC(k, x, y) {
  push();
  fill(0, 255, 0);
  rect(x, y, 20 * k, 70 * k); 
  pop();
}

//new alien
function alien2SC(k, lx, ly, rot, sc) {
  push(); 
    translate(lx, ly); 
    rotate(rot);
    scale(sc); 
    body2SC(k);
    head2SC(k, 0, -75); 
    eyes2SC(k, -20, -90, 20, -90); 
    antennae2SC(k, -30, -110, 30, -110); 
    arm2SC(k, -60, -25);
    arm2SC(k, 40, -25);
    pop();
}
function body2SC(k) {
  push();
  fill(0, 255, 0);
  ellipse(0, 0, 100 * k, 150 * k); 
  pop();
}

// Child 
function head2SC(k, x, y) {
  push();
  fill(0, 255, 0);
  ellipse(x, y, 80 * k, 80 * k); // Head
  pop();
}

// Child 
function eyes2SC(k, x1, y1, x2, y2) {
  push();
  fill(255);
  ellipse(x1, y1, 20 * k, 20 * k); // L Eye
  ellipse(x2, y2, 20 * k, 20 * k); // R Eye
  fill(0);
  ellipse(x1, y1, 10 * k, 10 * k); // L Pupil
  ellipse(x2, y2, 10 * k, 10 * k); // R Pupil
  pop();
}

// Child 
function antennae2SC(k, x1, y1, x2, y2) {
push();
stroke(0, 255, 0);
line(x1, y1, x1 + 10 * k, y1 - 30 * k); // L Antenna
line(x2, y2, x2 - 10 * k, y2 - 30 * k); // R Antenna
noStroke();
fill(0, 255, 0);
ellipse(x1 + 10 * k, y1 - 30 * k, 10 * k, 10 * k); // L Antenna Point
ellipse(x2 - 10 * k, y2 - 30 * k, 10 * k, 10 * k); // R Antenna Point
pop();
}

// Child 
function arm2SC(k, x, y) {
push();
fill(0, 255, 0);
rect(x, y, 20 * k, 70 * k); 
pop();
}