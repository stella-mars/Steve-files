let worm;
let wormArr;

let lx = new Array ()
let ly = new Array();
let speedX = new Array();
let speedY = new Array ();
let rot = new Array();
let sc = new Array ();




function setup(){
    createCanvas(500, 500);
    background(21, 150, 53);

    
    worm = new Worm(random(width), random(height), random(-10, 10), random(-10, 10));

    
    wormArr = new Array(40);

    for (let i = 0; i < wormArr.length; i++){
        let lx = random(width);
        let ly = random(height);
        let rot = random(TWO_PI); 
        let sc = random(0.5, 1.5);
        let speedX = random(-2, 2);
        let speedY = random(-2, 2);
        wormArr[i] = new Worm(lx,ly,rot,sc,speedX,speedY);
    }

    
}

function draw(){
    background(21, 150, 53);

    
    worm.update();
    worm.display();

   
    for (let i = 0; i < wormArr.length; i++){
        wormArr[i].update();
        wormArr[i].display();

        if(wormArr[i].showText) {
            wormArr[i].displayText();
        }
    }
}

function keyPressed(){
    if (key == 's'){
        for (let i = 0; i < wormArr.length; i++){
            wormArr[i].wee = !wormArr[i].wee;
            wormArr[i].showText = !wormArr[i].showText;  // Toggle color change
        }
    }
}





