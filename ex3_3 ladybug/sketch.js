


// example 2.3.3 this introduce the transformation  function set

let lxo = 0;
let lyo = 0;



// let counter = 0;    
let counter1 = 100;
let counter2 = 0;
let counter3 = 1;
let counter4 = 100;
let counter5 = 0;
let counter6 = 1;



let speedx, speedy, lox, loy;

function setup() {
    background(0);
    createCanvas(500, 500);
    speedx = random(-5, 5);
    speedy = random(-5, 5);
    lox = height / 2;
    loy = width / 2;
   
    console.log(speedx + " " + speedy);




}

function draw() {
    background(21, 150, 53);

    if (lox < 100) {
        speedx = -speedx;
    }
    if (lox > width-100) {
        speedx = -speedx;
    }
    // this is the short hand way of doing the same as the 2 'ifs' above
    // this uses or '||'
    if ((loy < 90) || (loy > height-90)) {
        speedy = -speedy;
    }

    // update the position of the ball and print to screen
    lox += speedx;
    loy += speedy;


    // rect (lox,loy,30,30, 5);
    counter1+=.1;
    counter2+= -.001;
    counter3+= -.001; 
    
    flowers(counter4,400, -counter5, counter6);
    flowers2(counter4,200, -counter5, counter6);
    flowers3(counter4,100, -counter5, counter6);
    flowers4(counter4,300, -counter5, counter6);


    counter4+=.1;
    counter5+= -.001;
    counter6+= -.001; 

    counter6=counter6%2;

    ladybug(lox,loy);
    ladybug2(50,loy);
    // ladybug3();

let r = random(255);


    
}
function flowers(lx,ly,rot,sc) {

    push();
        translate(lx,ly);
        rotate(rot);
        scale(sc);

    //flower petals
    strokeWeight(0);
    fill(237, 220, 245);
    ellipse(50,50,30,30);

    ellipse(70,70,30,30);
    ellipse(30,70,30,30);
    ellipse(50,90,30,30);
    
    
    //flower center
    fill(224, 167, 22);
    ellipse(50,70,30,30);

    let c = color(0,200,0);

    pop();
 
      }

      function flowers2(lx,ly,rot,sc) {

        push();
            translate(lx,ly);
            rotate(rot);
            scale(sc);
    
        //flower petals
        strokeWeight(0);
        fill(237, 220, 245);
        ellipse(50,50,30,30);
    
        ellipse(70,70,30,30);
        ellipse(30,70,30,30);
        ellipse(50,90,30,30);
        
        
        //flower center
        fill(224, 167, 22);
        ellipse(50,70,30,30);
    
        let c = color(0,200,0);
    
        pop();
     
          }


function flowers3(lx,ly,rot,sc) {

            push();
                translate(lx,ly);
                rotate(rot);
                scale(sc);
        
            //flower petals
            strokeWeight(0);
            fill(237, 220, 245);
            ellipse(50,50,30,30);
        
            ellipse(70,70,30,30);
            ellipse(30,70,30,30);
            ellipse(50,90,30,30);
            
            
            //flower center
            fill(224, 167, 22);
            ellipse(50,70,30,30);
        
            let c = color(0,200,0);
        
            pop();
         
      }
    
      function flowers4(lx,ly,rot,sc) {

        push();
            translate(lx,ly);
            rotate(rot);
            scale(sc);
    
        //flower petals
        strokeWeight(0);
        fill(237, 220, 245);
        ellipse(50,50,30,30);
    
        ellipse(70,70,30,30);
        ellipse(30,70,30,30);
        ellipse(50,90,30,30);
        
        
        //flower center
        fill(224, 167, 22);
        ellipse(50,70,30,30);
    
        let c = color(0,200,0);
    
        pop();
     
  }



  function ladybug(lx,ly,rot,sc) {
    push();
        translate(lx,ly);
        rotate((radians(rot)));
        scale(sc);
       
     
        bug(-50,50);
        fill(0);
        line(-20,-100,-10,-50);
    
        fill(0);
        line(20,-100,10,-50);
        
        eyes(-50,50);
     
        dots(-50,50);
    
        let c = color(0,200,0);
    
        pop();

        
  }

function ladybug2(lx,ly,rot,sc) {
push() ;

translate(lx,ly);
rotate((radians(rot)));
scale(sc);
   
fill(0);
bug(-50,50);

line(-20,-100,-10,-50);

fill(0);
line(20,-100,10,-50);

eyes(-50,50);

dots(-50,50);

partyhat(-50,50);

boots(-50,50);


let c = color(0,200,0);



pop();



  }

  function ladybug3(k,lx,ly,rot,sc) {
    push() ;
    
    translate(lx,ly);
    rotate((radians(rot)));
    scale(sc);
    
       
 
    bug(k,-50,50);
    
    line(-20,-100,-10,-50);
    
    fill(0);
    line(20,-100,10,-50);
    
    eyes(-50,50);
    
    dots(-50,50);
    

    
    let c = color(0,200,0);
    
    
    
    pop();
    
    
    
      }

function dots (){
    strokeWeight(0);
    fill(255);
    ellipse(-25,-20,25,25);

    fill(255);
    ellipse(25,-20,25,25);

    fill(255);
    ellipse(-25,20,25,25);

    fill(255);
    ellipse(25,20,25,25);
    strokeWeight(0);

    
}

function eyes(){
    fill(255);
    ellipse(-25,-60,15,15);

    fill(255);
    ellipse(25,-60,15,15);
}

function bug(){

    strokeWeight(5);
    fill(0);
    ellipse(0,-50,50,50);

    fill(255,0, 0);
    ellipse(0,0,100,100);  

    line(0,-30,0,50);

    fill(255);
    ellipse(-25,-60,15,15);

    fill(255);
    ellipse(25,-60,15,15);

    
}

function bug1(){

    strokeWeight(5);
    fill(0);
    ellipse(0,-50,50,50);

    fill(255,0, 0);
    ellipse(0,0,100,100);  

    line(0,-30,0,50);

    fill(255);
    ellipse(-25,-60,15,15);

    fill(255);
    ellipse(25,-60,15,15);

    
}

function partyhat(){
let r = random(255);
strokeWeight(5);
    fill(255,155,r);
    triangle(-10,-70,10,-70,0,-100);

    // fill(255,155,r);
    // circle(0,-100,20);   



}


function boots(){
strokeWeight(5);
fill(235, 170, 7);
ellipse(-50,-30,-20,25);


fill(235, 170, 7);
ellipse(50,-30,-20,25);

fill(235, 170, 7);
ellipse(-60,10,-20,25);

fill(235, 170, 7);
ellipse(60,10,-20,25);

}









// let flowers = [];

// function setup() {
//     createCanvas(600,600);
//     background(21, 150, 53);
//    }

//    function draw() {
//     background(21, 150, 53);
   
//     ladybug(counter1,400, -counter2, counter3);

//     counter1+=.1;
//     counter2+= -.001;
//     counter3+= -.001; 

//    }

//    function ladybug(lx,ly,rot,sc) {
   
//     push();
//     translate(lx,ly);
//     rotate(rot);
//     scale(sc);
   
//  strokeWeight(5);
//     fill(0);
//     ellipse(0,-50,50,50);

//     fill(255,0, 0);
//     ellipse(0,0,100,100);  

//     line(0,-30,0,50);

//     fill(255);
//     ellipse(-25,-60,15,15);

//     fill(255);
//     ellipse(25,-60,15,15);

  
//     fill(0);
//     line(-20,-100,-10,-50);

//     fill(0);
//     line(20,-100,10,-50);

//     strokeWeight(0);
//     fill(255);
//     ellipse(-25,-20,25,25);

//     fill(255);
//     ellipse(25,-20,25,25);

//     fill(255);
//     ellipse(-25,20,25,25);

//     fill(255);
//     ellipse(25,20,25,25);

//     strokeWeight(5);
//     line(-25,-50,25,-50);
 


//     let c = color(0,200,0);

//     pop();
//    }