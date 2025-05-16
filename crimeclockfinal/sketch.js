
var cat;


function setup() {
  createCanvas(1100, 600);
  background(42, 48, 92);

  mgr = new SceneManager();
  // Preload scenes. Preloading is normally optional
  // ... but needed if showNextScene() is used.
  mgr.addScene (intro);
  mgr.addScene (scene2);
  mgr.addScene (scene3);
  mgr.addScene (theend);
  mgr.showNextScene();

//   cat= createSprite(0, 0);
//   cat.addAnimation("normal", "assets/cat_wag0001.png",  "assets/cat_wag0003.png");  // first image, and last image
}


function draw() {
  new GradBack().display();
  new Board().display();
  // new Evi().display();

  // new StringLine().display();
  // new Pin().display();

  new EviText().display();
  new Sun().display();
  new Windows().display();
  new WindowFrame().display();

  new Desk().display(); 
  // new Cat().display();



  let h = hour();   // 0-23
  let m = minute(); // 0- 59
  let s = second();  // 0-59

  
}



