
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes
let loy= 0;


////////////////////////////// 1 /////////////////
function intro()  {


    this.setup = function() {

      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      background("blue");
      textAlign(CENTER);
      textSize(29);
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");
        // textX = 10;
        // textY = 0;

    //   loy = 100;
     

    //   cat.position.x = 50;
    //   cat.position.y = 80;
    //   cat.position.x =  width/2;
    //   cat.position.y =  height/2;
    //   cat.visible = true;
    //   cat.changeAnimation("normal");


    }


    this.draw = function()
    {

   
  
    }

    // this.keyPressed = function() {
    //
    //
    // }

    this.mousePressed = function()
    {

        this.sceneManager.showNextScene();
    }
}

///////////////////////  2  ////////////////////////

function scene2()  {
   let octo1,octo2;

  this.setup = function() {
      background(0);
      console.log("We are at setup for scene2");
      // octo1 = new Octopi(400,600,color(255,0,0),.40);
      // octo2 = new Octopi(650,200,color(0,0,0),.10);
  }

  this.enter = function()
  {
  //   octo1.resetupdate();
  //   octo2.resetupdate();

  //   if (snd1.isPlaying()) {
  //     snd1.pause(); // .play() will resume from .pause() position
  // } else {
  //     snd1.play();
  // }
  //     console.log("We are at  scene2 (again?)");

  }

    this.draw = function()
    {
      background(0);
      // noStroke();
      // octo1.update();
      // octo1.display();
      // octo2.update();
      // octo2.display();
      // fill(200);
      // text("mapbe too deep...hit a key to escape", 300, height-60);
      
    }

    this.mouseDragged = function() {
      console.log("mouseDragged");
      octo1.moveupdate(300- (mouseX/10), 240);
      octo2.moveupdate(650,200);
    }

    // this.mousePressed = function()
    // {

    //   //console.log("exit");
    //   this.sceneManager.showNextScene();
    // }



  this.keyPressed = function()  {

    this.sceneManager.showNextScene();
  
        // switch(key)
        // {
        //     case 'h':
        //         mgr.showScene( scene3 );
        //     //     break;
        //     // case '2':
        //     //     mgr.showScene( scene2 );
        //     //     break;
        //     // case '3':
        //     //     mgr.showScene( scene3 );
        //     //     break;
        // }
  
        // ... then dispatch via the SceneManager.
  
    }


}


////////////////////////////// 3 /////////////////

function scene3() {

  let loy= 255;

    this.setup = function()  {
        console.log("We are at setup for scene3");


    }

    this.enter = function()  {
        let loy= 255;
       
        console.log("We are entering scene3");
        snd1.stop(); // stop the sound so we can have it start again when we return.
        wood.play();

        
    }




    this.draw = function() {
      background(100,0,255-loy);
      textAlign(CENTER);
      textSize(35);
      text("Help", 90, 70);
      textSize(29);

        push();
        //
        translate(width/2,loy*3);
        image(opi, -160,0);
        fill(255);
        translate(0,loy*.90);
        text("Wiggle the mouse to get their attention...", 0, 100);
        text("Click the mouse or hit 'H' to go back.", 0, 150);

        if (loy < 0) {
          loy = 255;
        } else {
          loy-=.45;
        }
        //
        pop();

       

    }

    this.mousePressed = function()  {

      mgr.showScene( scene2 );
    }



    // this.keyPressed = function()  {
    //
    //       switch(key)
    //       {
    //           case 'h':
    //               mgr.showScene( scene2 );
    //           break;
    //           // case '2':
    //           //     mgr.showScene( scene2 );
    //           //     break;
    //           // case '3':
    //           //     mgr.showScene( scene3 );
    //           default:
    //           mgr.showScene( scene1 );
    //
    //       }
    //
    //       // ... then dispatch via the SceneManager.
    //
    //   }

}




function theend() {

  this.setup = function()  {
      console.log("we are setting up on the result scene");
  }

  this.enter = function() {
     console.log("we are entering the result scene");

  }

 this.draw = function() {
   background(255,0,0);
   text("the result",width/2,height/2);

 }


}

