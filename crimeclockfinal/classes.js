
class Board{


display(){
this.board();
}

board(){

push();

noStroke();
fill(74, 46, 24)
rect(40,20,720,520);

fill(163, 121, 88);
rect(50,30,700,500);

pop();
}

}



// class Papershadow {

// display(){
// this.paperShadow();
// }

// paperShadow(){
// push();
// noStroke();
// fill(58, 58, 145,75);
// rect(95,95,130,150);
// pop();  
// }

// }


class Evi{
  

    display(){
        this.paperShadow();
        this.evi();
        // this.stringLine();
        this.Pin();
      

    }
    paperShadow(){
        push();
        noStroke();
        fill(58, 58, 145,75);
        rect(95,95,130,150);
        pop();  
    }


    evi(){

        push();
        fill(255);
        rect(90,90,130,150);
        pop();
    }

    stringLine(){
        
      push ();
      stroke(171, 45, 24);
      strokeWeight(5);
      line (157,113,400,200);
      pop ();
      
  }

    Pin(){
        
      push();
      
      fill(181, 74, 2);
      ellipse(157,113,16,16);
          
      
      fill(214, 155, 54)
      ellipse(155,110,18,18);
      
      pop();
  
  }
  



}



class StringLine{
  
  display(){
  
    this.string();
  
  }
  
  string(){
    
    push ();
stroke(171, 45, 24);

strokeWeight(5);

line (157,113,400,200);

pop ();
    
  }
  
}   

class Pin{

    display(){
        
        push();
        this.pin();
        pop();
    
    }
    
    pin(){
        
        push();
        
        fill(181, 74, 2);
        ellipse(157,113,16,16);
            
        
        fill(214, 155, 54)
        ellipse(155,110,18,18);
        
        pop();
    
    }
}

class EviText{
  
  display(){
  
    this.eviText();
    this.text();
  }
  
  eviText(){
    
    push();
    fill(232, 223, 213);
    rect(240,10,350,80);
    pop();
    
  }
  text(){

    push();
    fill(255,0,0);
    textSize(50);
    textFont("Georgia");
    textAlign(CENTER);
    text("Evidence", 420, 65);
    pop();

  }
  
}

class Sun{
  
  display(){
  
    this.sun();
   
  }
  
  sun(){
    noStroke();
    push();
    fill(255, 175, 15);
    ellipse(980,120,100,100);
    pop();
    
  }

 
}

class Windows {
    display() {
      this.window();
      // this.Sun();
    }
  
    window() {
      push();
  
      let gradient = drawingContext.createLinearGradient(
        width / 200, height / 200, width / 200, height / 2 + 200
      );
  
      gradient.addColorStop(0, color(78, 82, 102));
      gradient.addColorStop(1, color(178, 180, 191));
  
      drawingContext.fillStyle = gradient;
      rect(770, 20, 320, 520);
  
      pop();
    }

    Sun() {
      push();
      fill(255, 175, 15);
      ellipse(980, 120, 100, 100);
      pop();
    }
  }
  

class WindowFrame{
  
  display(){
  
    this.windowFrame();
  
  }
  
  windowFrame(){
    
    push();

    fill(79, 33, 12);
    rect(770, 20, 10, 520);
    rect(770, 20, 320, 10);
    rect(1080, 20, 10, 520);
    rect(770, 530, 320, 10);
    rect(770, 50, 320, 10);
    rect(770, 500, 320, 10);
    rect(800, 20, 10, 520);
    rect(1050, 20, 10, 520);

    pop();
    
  }


}   

class GradBack {


    display() {
      let gradient = drawingContext.createLinearGradient(
        width / 200, height / 200, width / 200, height / 2 + 200
      );
  
      gradient.addColorStop(0, color(82, 37, 6));
      gradient.addColorStop(1, color(120, 83, 58));
  
      drawingContext.fillStyle = gradient;
      rect(0, 0, 1100, 600);

 
    }
  }

  class WindowsDark {
    display() {
      this.window();
      this.Sun();
    }
  
    window() {
      push();
  
      let gradient = drawingContext.createLinearGradient(
        width / 200, height / 200, width / 200, height / 2 + 200
      );
  
      gradient.addColorStop(0, color(6, 0, 181));
      gradient.addColorStop(1, color(81, 51, 145));
  
      drawingContext.fillStyle = gradient;
      rect(770, 20, 320, 520);
  
      pop();
    }

    Sun() {
      push();
      fill(255, 175, 15);
      ellipse(980, 120, 100, 100);
      pop();
    }
  }


  class Moon{

display(){
    this.moon
}

moon(){
    push();
    fill (247, 246, 225);
    ellipse(980, 120, 100, 100);
    pop();
}

  }


  class Desk{
    display(){
        this.desk();
    }
    
    desk(){
        push();
        fill(74, 46, 24);
        rect(0,490,360,200);

   
        fill(110, 71, 41);
        rect(0,515,330,180);

        fill(227, 170, 27)
        ellipse(270, 560, 40, 40);


        fill(227, 170, 27)
        ellipse(10, 560, 40, 40);
        pop();
    }

  
  }


 class Overlay{
  
  display(){
  
    this.overlay();
  
  }
  
  overlay(){
    
    push();
    let gradient = drawingContext.createLinearGradient(
      width / 200, height / 200, width / 200, height / 2 + 200
    );

    gradient.addColorStop(0, color(6, 0, 181,100));
    gradient.addColorStop(1, color(81, 51, 145,100));

    drawingContext.fillStyle = gradient;
    rect(0, 0, 1100, 600);
    pop();
  }
}


//////WEATHER CLOUDS/////



class Cloud {
  constructor(x, y, spacing, dia, speed = 1, bounds = {xMin: 770, xMax: 1090, yMin: 20, yMax: 540}) {
    this.x = constrain(x, bounds.xMin, bounds.xMax);
    this.y = constrain(y, bounds.yMin, bounds.yMax);
    this.spacing = spacing;
    this.dia = dia;
    this.speed = speed;
    this.bounds = bounds;

    let greyVal = random(150, 255);  
    this.color = color(greyVal, greyVal, greyVal);  
  }

  update() {
    this.x += this.speed;

    if (this.speed > 0 && this.x - this.spacing > this.bounds.xMax) {
      this.x = this.bounds.xMin - this.spacing * 2;
    } else if (this.speed < 0 && this.x + this.spacing < this.bounds.xMin) {
      this.x = this.bounds.xMax + this.spacing * 2;
    }
  }

  display() {
    push();
    drawingContext.save();
    drawingContext.beginPath();
    drawingContext.rect(this.bounds.xMin, this.bounds.yMin, this.bounds.xMax - this.bounds.xMin, this.bounds.yMax - this.bounds.yMin);
    drawingContext.clip();

    translate(this.x, this.y);
    noStroke();
    fill(this.color);  // Use the pre-generated fill color
    circle(0, 0, this.dia);
    circle(-this.spacing, 0, this.dia);
    circle(this.spacing, 0, this.dia);
    circle(0, -this.spacing, this.dia);

    drawingContext.restore();
    pop();
  }
}



class Raindrop {
  constructor(x, y, speed = random(4, 8)) {
    this.x = x;
    this.y = y;
    this.length = random(10, 20);
    this.speed = speed;
  }

  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-100, -10);
      this.x = random(770, 1090); 
    }
  }

  display() {
    push();
    drawingContext.save();
    drawingContext.beginPath();
    drawingContext.rect(770, 20, 320, 520);  // Match the window bounds
    drawingContext.clip();
  
    stroke(136, 171, 209);
    strokeWeight(3);
    line(this.x, this.y, this.x, this.y + this.length);
  
    drawingContext.restore();
    pop();
  }
  
}


