// let lxo = 0;
// let lyo = 0;
// let counter = 0


// let ladybugArr = new Array (400)

// let wormArr = new Array (400);

let lx = new Array ()
let ly = new Array();
let speedX = new Array();
let speedY = new Array ();
let rot = new Array();
let sc = new Array ();

let lx1 = new Array ()
let ly1 = new Array();
let speedX1 = new Array();
let speedY1 = new Array ();
let rot1 = new Array();
let sc1 = new Array ();



let ladybugArr = [];  // Array to hold ladybug instances
let wormArr = [];     // Array to hold worm instances

function setup() {
    createCanvas(500, 500);
    background(255);

    // Create worms (wormArr initialization)
    for (let i = 0; i < 400; i++) {
        let lx = random(width);
        let ly = random(height);
        let rot = random(TWO_PI); 
        let sc = random(0.5, 1.5);
        let speedX = random(-2, 2);
        let speedY = random(-2, 2);
        wormArr.push(new Worm(lx, ly, rot, sc, speedX, speedY));
    }
}

function draw() {
    background(21, 150, 53);

    // Update and display worms (if they exist)
    for (let i = 0; i < wormArr.length; i++) {
        wormArr[i].update();
        wormArr[i].display();
    }

    // Update and display ladybugs (they should move after creation)
    for (let i = 0; i < ladybugArr.length; i++) {
        ladybugArr[i].update();
        ladybugArr[i].display();
    }
}

// Add ladybugs when mouse is pressed
function mousePressed() {
    // Only add 5 ladybugs on mouse press for a manageable number
    for (let i = 0; i < 5; i++) {
        let lx1 = mouseX;
        let ly1 = mouseY;
        let rot1 = random(TWO_PI);  // Random rotation
        let sc1 = random(0.5, 1.5);
        let speedX1 = random(-2, 2);
        let speedY1 = random(-2, 2);
        ladybugArr.push(new Ladybug(lx1, ly1, rot1, sc1, speedX1, speedY1));
    }

    // Empty the wormArr to make worms disappear
    wormArr = [];
}

// Worm class
class Worm {
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

        // Check for collisions with the canvas edges and reverse direction
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

    sec1() {
        strokeWeight(3);
        fill(161, 66, 245);
        ellipse(50, 50, 50, 50);
    }

    sec2() {
        strokeWeight(3);
        fill(96, 66, 245);
        ellipse(90, 50, 50, 50);
    }

    sec3() {
        strokeWeight(3);
        fill(66, 245, 96);
        ellipse(130, 50, 50, 50);
    }

    sec4() {
        strokeWeight(3);
        fill(186, 250, 57);
        ellipse(170, 50, 50, 50);
    }

    sec5() {
        strokeWeight(3);
        fill(250, 231, 57);
        ellipse(210, 50, 50, 50);
    }

    sec6() {
        strokeWeight(3);
        fill(250, 160, 57);
        ellipse(250, 50, 50, 50);
    }

    sec7() {
        strokeWeight(3);
        fill(250, 57, 57);
        ellipse(290, 50, 50, 50);
    }

    attenaeworm() {
        fill(0);
        line(280, 25, 280, 10);
        fill(0);
        line(300, 25, 310, 10);
    }

    balls() {
        ellipse(280, 10, 10, 10);
        ellipse(310, 10, 10, 10);
    }
}

// Ladybug class
class Ladybug {
    constructor(lx1, ly1, rot1, sc1, speedX1, speedY1) {
        this.lx1 = lx1;
        this.ly1 = ly1;
        this.rot1 = rot1;
        this.sc1 = sc1;
        this.speedX1 = speedX1;
        this.speedY1 = speedY1;
    }

    update() {
        this.lx1 += this.speedX1;
        this.ly1 += this.speedY1;

        // Check for collisions with the canvas edges and reverse direction
        if (this.lx1 < 0 || this.lx1 > width) {
            this.speedX1 = -this.speedX1;
        }
        if (this.ly1 < 0 || this.ly1 > height) {
            this.speedY1 = -this.speedY1;
        }
    }

    display() {
        push();
        translate(this.lx1 - 50, this.ly1 - 50);
        rotate(radians(this.rot1));
        scale(0.5);

        this.bug3(-50, 50);
        this.atennae(-50, 50);
        this.eyes(-50, 50);
        this.dots(-50, 50);

        pop();
    }

    dots() {
        strokeWeight(0);
        fill(255);
        ellipse(-25, -20, 25, 25);
        fill(255);
        ellipse(25, -20, 25, 25);
        fill(255);
        ellipse(-25, 20, 25, 25);
        fill(255);
        ellipse(25, 20, 25, 25);
        strokeWeight(0);
    }

    eyes() {
        fill(255);
        ellipse(-25, -60, 15, 15);
        fill(255);
        ellipse(25, -60, 15, 15);
    }

    bug3() {
        strokeWeight(5);
        fill(0);
        ellipse(0, -50, 50, 50);

        fill(random(255), random(255), random(255));
        ellipse(0, 0, 100, 100);

        line(0, -30, 0, 50);

        fill(255);
        ellipse(-25, -60, 15, 15);

        fill(255);
        ellipse(25, -60, 15, 15);
    }

    antennae() {
        fill(0);
        line(-20, -100, -10, -50);
        fill(0);
        line(20, -100, 10, -50);
    }
}
