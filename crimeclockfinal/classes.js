
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
        this.stringLine();
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
  
  }
  
  eviText(){
    
    push();
    fill(232, 223, 213);
    rect(240,10,350,80);
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
      this.Sun();
    }
  
    window() {
      push();
  
      let gradient = drawingContext.createLinearGradient(
        width / 200, height / 200, width / 200, height / 2 + 200
      );
  
      gradient.addColorStop(0, color(70, 172, 250));
      gradient.addColorStop(1, color(207, 234, 255));
  
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
  
      gradient.addColorStop(0, color(148, 6, 67));
      gradient.addColorStop(1, color(184, 162, 152));
  
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


  class Cat {
    display(){
        this.cat();
    }
    
    cat(){
        push();
        fill(255, 0, 0);
        ellipse(160, 480, 200, 120);
        pop();
    }
  
  }