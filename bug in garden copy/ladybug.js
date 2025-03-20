

class Ladybug{

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

display(){
    push() ;
    
    translate(lx-50,ly-50);
    rotate((radians(rot)));
    scale(0.5);
    
       
  
    this.bug3(-50,50);
    this.atennae(-50,50);
    this.eyes(-50,50);
    this.dots(-50,50);


    
    pop();
}

dots (){
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
    
eyes(){
        fill(255);
        ellipse(-25,-60,15,15);
    
        fill(255);
        ellipse(25,-60,15,15);
    }
    

 bug3(){
    
        strokeWeight(5);
        fill(0);
        ellipse(0,-50,50,50);
    
        fill(random(255),random(255),random(255));
        ellipse(0,0,100,100);  
    
        line(0,-30,0,50);
    
        fill(255);
        ellipse(-25,-60,15,15);
    
        fill(255);
        ellipse(25,-60,15,15);


    }
    
atennae(){
        fill(0);
        line(-20,-100,-10,-50);
    
        fill(0);
        line(20,-100,10,-50);
    }



}

