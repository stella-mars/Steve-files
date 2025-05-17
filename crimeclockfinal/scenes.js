
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================
  
////////////////////////////// 1 /////////////////




function splash()  {
    var textX;
    var textY;
    var loy= 0;  // exists as data saved when in the splash scene
    let btnevent1 =false;
    let btnevent2 =false;
    let btnevent3 =false;
   




   
    
    // scene1.setup
    this.setup = function() {
      console.log("We are at setup for splash");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      outputVolume(.15);  // turn down the volume.

///furniture

    this.wall = new GradBack() ;
    this.board = new Board ();
    this.evi = new Evi ();
    // this.string = new StringLine ();
    this.title = new EviText ();

    this.window = new Windows ();
    this.sun = new Sun ();

    this.frame = new WindowFrame ();
    this.over = new Overlay ();

    this.desk = new Desk();



  //// only clouds
  this.clouds = [
    new Cloud(100, 100, 50, 100, 1),
    new Cloud(300, 150, 30, 60, 0.8),
    new Cloud(250, 50, 20, 40, 1.2),
    new Cloud(0, 200, 40, 90, 0.6)
  ];
  

  ///weather
  this.raindrops = [];
  for (let i = 0; i < 50; i++) {
    let x = random(770, 1090);  
    let y = random(-500, 0);
    this.raindrops.push(new Raindrop(x, y));
  }


     
    }



    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering splash");
        background("grey");
        textAlign(CENTER);
        textSize(30);
        noStroke();

        // reset or disable the other scenes and their stuff
        // turn off the other scene stuff
        snd1.stop();
        // make sure ghost is gone from this scene
        cat.visible = false;
      

    }



    this.draw = function()
    {
     
      background(28, 34, 54);
      // this is the draw function for all p5.play commands
    
      noStroke();
      

      // fill(0,120,200);
      // rect(-5,height-170,width+5,170);
      this.wall.display();
      this.over.display();
      this.board.display();
      // this.string.display();
      this.evi.display();
     
      this.title.display();
  
      this.window.display();

      for (let c of this.clouds) {
        c.update();
        c.display();
      }
      
      for (let drop of this.raindrops) {
        drop.update();
        drop.display();
      }
      

      // this.sun.display();

      this.frame.display();
        
      this.desk.display();
     
 


    
    
   
                             // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent1 = checkButtonPress("info?",width-150,height-70,100,40,color(220,100,100),color(100),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        this.sceneManager.showScene( help );
      }
                            // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent2 = checkButtonPress("land here !!",width/2-60,height-140,120,40,color(120,180,100),color(100),color(250));
      if (btnevent2) {   // main or next scene
        btnevent2 = false;
         playshortsound();
         this.sceneManager.showNextScene();
      }
   
    }

    this.keyPressed = function() {
        fill(0,255,0);
        text(keyCode, textX, textY += 10);

        if ( textY > height )  {
            textX += 20;
            textY = 0;
        }
    }

    this.mousePressed = function() {

     
    }
}

///////////////////////  2  ////////////////////////

function main()  {
   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
    // var loy = 120;

   let btnevent1 = false;

  this.setup = function() {
      console.log("We are at setup for main");
      // make sure ghost is gone from this scene
  }

  this.enter = function()
  {
    console.log("We are at entering main");
    cat.position.x = 50;
    cat.position.y = 80;
    cat.position.x =  width/2;
    cat.position.y =  height/2;
    cat.visible = true;
    cat.changeAnimation("normal");


    if ( !snd1.isPlaying() ) {
      snd1.play();
   }


  }




    this.draw = function() {
      background("lightblue");
      // this is the draw function for all p5.play commands
     image (dancefloor,0,0,width,height);
      // fill(250,180,0);
      // ellipse(width/2,height/2+100,260,260);
      // fill(0,120,200);
      // rect(-5,height-190,width+5,190);
      // ghost events defined
      push();
      fill(random(25),random(25),random(255), 100)
      rect(-10,-10,650,800);
    pop();
    cat.changeAnimation("normal");

     if (   cat.mouse.hovering() ) {
        console.log("over");
        cat.changeAnimation("stand");
        cat.position.x += random(-5,5);
        cat.position.y += random(-5,5);
        snd2.play();  // lots of fast sound playing
     }
      
     if (  cat.mouse.pressing()) {
           if ( !snd2.isPlaying() ) {
              snd2.play();
          } else {
              snd2.pause();

          }

     }  
    

    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress("info?",width-150,height-70,100,40,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help);
    }
   

    }  //end

    this.mousePressed = function()
    {

    }


}



////////////////////////////// 3 /////////////////

function help() {

    this.setup = function()  {
        console.log("We are at setup for help");
        // access a different scene using the SceneManager

    }

    this.enter = function()
    {
     console.log("We are at entering for help");
     cat.visible = true;
     cat.position.x = 100;
     cat.position.y = 100;


    }

    this.draw = function() {
  image (space,0,0,width,height);
      // this is the draw function for all p5.play commands
     
  
      fill("red");
      textAlign(LEFT);
      textSize(25);
      text( "zeeb zeeb zeeb zorp. \nzorp zeeb, zorp zeeb, \n gleeb gleeb gleeb! " , 170,70);
      text( "(im gleeby and i came here to party!\nclick me to go back to partying!\n live, laugh, love !)\n", 30, 220);
      text( "( or click party harder to PARTY HARDER !!!) ", 30, 340);

     

      if (   cat.mouse.hovering() ) {
        cat.log("over");
        cat.changeAnimation("normal");
        // ghosty.position.x += random(-4,4);
        // ghosty.position.y += random(-2,2);
      
     }  else {

      cat.changeAnimation("normal");


     }
      

     if (  cat.mouse.pressing()) {
           if ( !snd2.isPlaying() ) {
              snd2.play();
          } else {
              snd2.pause();

          }

       this.sceneManager.showScene( main );

     }  

     btnevent3 = checkButtonPress("PARTY HARDER !!!",width-420,height-70,200,40,color(220,100,100),color(148, 52, 237),color(255));  
     if (btnevent3) { // help
       btnevent3 = false;
       this.sceneManager.showScene( main);
     }

        
    }

   

}


function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

  let btnc = "";
  let btnstate =false;

  // Test if the cursor is over the box
  if ( mouseX > bx - boxW &&
       mouseX < bx + boxW &&
       mouseY > by - boxH &&
       mouseY < by + boxH ) {
       overBox = true;

    if (!mouseIsPressed) {
      stroke(255);
      btnc = ovcolor;
      btnstate = false;
    } else {
      console.log(str + " pressed");
      stroke(255);
      btnc = dncolor;
      btnstate = true;
    }

  } else {
    stroke(255);
    btnc = upcolor;
    overBox = false;
  }

  push();
  translate(bx,by);
  fill(btnc);
  rect(0, 0, boxW, boxH,10); // draw the box

  fill(20);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text (str,boxW/2,28);

    pop();

    return btnstate;

}



function playshortsound() {
  if ( !snd2.isPlaying() ) {
    snd2.play();
  } else {
     snd2.stop();
 }


}

/////// 4////////

