
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/

//global variiables 

// let image1_up, image2_over;
let snd1,snd2;




let earth,space,club, dancefloor, floor;
// var duration;
// var  slideWidth = 500;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.
var cat;
// textFont(secret);



function preload() {
    // sound should be loaded so its available for all places.
   snd1 = loadSound("assets/sousghost.mp3");
   snd2 = loadSound("assets/beatbox.mp3");


  
}



function setup() {
    createCanvas(1100, 600);
    //console.log(hell);
    mgr = new SceneManager();

 


    cat = createSprite(0, 0);
    cat.addAnimation("normal", "assets/cat_wag0001.png",  "assets/cat_wag0003.png");  // first image, and last image
    // cat.addAnimation("stand", "assets/gleeb_dance0001.png",  "assets/gleeb_dance0003.png"); // first image, and last image
    // cat.addAnimation("out", "assets/gleeb_drunk0001.png",  "assets/gleeb_drunk0003.png"); // first image, and last image
    // cat.addAnimation("fart", "assets/gleeby_fart0001.png",  "assets/gleeby_fart0003.png"); // first image, and last image
     // make the sprite invisible until you need it.
     cat.visible = false;

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (splash);
    mgr.addScene (main);
    mgr.addScene (help);
   
    mgr.showNextScene();

}





function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( splash );
            break;
        case '2':
            mgr.showScene( main );
            break;
        case '3':
            mgr.showScene( help );
            break;
        case 'h':
            mgr.showScene( help );
            break;
        
       case '4':
        mgr.showScene( drunk );
        break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
