// example 5.2

// This uses the transformation matrix tools to move,
//rotate and scale things as batch operations
  // 11 x 11
let gridarr1 = [
   
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0],
    [0, 5, 4, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 4, 4, 0, 0],
    [4, 4, 4, 4, 0, 0, 0, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 4, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 5, 4, 0],
    [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 4, 4, 4, 4],
    [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 4, 4, 0],
    [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 2, 1, 1, 1, 1, 3, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 2, 1, 1, 3, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 2, 2, 1, 1, 1, 3, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 2, 2, 1, 1, 1, 1, 3, 3, 3, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 2, 2, 0, 2, 1, 1, 1, 1, 1, 3, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 0, 0, 0],
    [0, 0, 0, 2, 2, 0, 2, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
    [4, 4, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [4, 4, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 5, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0],
    [0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0],
    [0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0],
];

    // 5 x 5
let textarr = [
    ["money","money", "money", "money", "money", "money" , "money",  "money",  "money", "money"],
    ["money","one", "money", "money", "george", "money" , "money",  "money",  "one", "money"], 
    ["money","one", "money", "george", "george", "george" , "money",  "money",  "one", "money"],
    ["money","money", "money", "george", "george",  "george" , "money",  "money",  "money", "money"],
    ["money","money", "money", "george",  "george",  "george",   "money",  "money",  "money", "money"],
    ["money","money", "money", "george",  "george",  "george",   "money",  "money",  "money", "money"],
    ["money","money", "money", "george",  "george",  "george",   "blood",  "money",  "money", "money"],
    ["money","money", "money", "george",  "george",  "george",  "blood",  "blood",  "money", "money"],
    ["money","one", "money", "george", "george", "george",  "blood",  "blood",  "one", "money"],
    ["money","one", "money", "money", "george", "blood",  "money",  "money",  "one", "money"],
    ["money","money", "money", "money", "money", "blood",  "money",  "money",  "money", "money"]
];


let font1;
let images =[];

function preload()  {

       font1 = loadFont('assets/oswald.ttf');
       images[0] = loadImage('assets/pizza.png');
       images[1] = loadImage('assets/pineapple.png');
       images[2] = loadImage('assets/tomato.png');
       images[3] = loadImage('assets/mushroom.png');

}


function setup() {
     createCanvas(800, 700);
     background(4, 42, 99);
     fill(100);
     textFont(font1);
           //2darr, x,y,rot,scale, alpha
  
     //mapToMonoPixels(gridarr1, -20, 20, -3, 5, 50);
     //mapToMonoPixels(gridarr1, 580, 20, 20, 1.25, 255);
    // mapToColorPixels(gridarr1, 20, 260, -45, 1.3, 255);
      //mapToColorShapes(gridarr1, 120, 460, 30, 1.25, 255);
    mapToColorShapes(gridarr1, 300, 100, 0, 1.5, 255);
    
     //mapToColorText(textarr, 150, 350, 10, 1.25, 255);
   
    // mapToBitMaps(gridarr1,images, 300, 100, -3, 1.55);
    // mapToTintedBitMaps(gridarr1,images, 400, 550, -20, 1.85,190);
    // mapToColorTextBitMap(textarr, images, 150, 50, -10, 0.75, 175);
}


          //2darr, x,y,rot,scale, alpha
// function mapToMonoPixels(arr,lx,ly,rot,sc, fade) {
//     push();
//     translate(lx,ly);
//     rotate(radians(rot));
//     scale(sc);
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr[0].length; j++) {
//             fill(arr[i][j] * 128, fade);
//             rect(j * 12, i * 12, 10, 10);
//         }
//     }
//    pop();

// }


//          //x,y,rot,scale, alpha
// function mapToColorPixels(arr,lx,ly,rot,sc, fade) {
//     push();
//     translate(lx,ly);
//     rotate(radians(rot));
//     scale(sc);
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr[0].length; j++) {
//              let value = arr[i][j];
//               if ( value == 0 ) {
//                   fill(200,70,0, fade);
//               } else if ( value == 1 ){
//                   fill(0, fade);
//               } else if ( value == 2 ) {
//                   fill(90,30,90, fade);
//               } else {
//                  fill(20,220,250, fade); 
        
//               }
//             rect(j * 12, i * 12, 10, 10);
//         }
//     }
//     pop();

// }

function mapToColorShapes(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                  fill(67, 119, 196);
                  ellipse(j * 12, i * 12, 10, 10);
              } else if ( value == 1 ){
                  fill(122, 39, 75);
                   rect(j * 12-6, i * 12-6, 10, 10,2);
              } else if ( value == 2 ) {
                  fill(94, 21, 64);
                   ellipse(j * 12, i * 12, 15, 10,5);
              } else if ( value == 3 ) {
                 fill(163, 55, 102);
                 ellipse(j * 12, i * 12, 15, 10,5);
              }else if ( value == 4 ) {
                 fill(146, 181, 232);
                 ellipse(j * 12, i * 12, 15, 10,5);}
                else if ( value == 5 ) {    
                    fill(232, 241, 255);
                    ellipse(j * 12, i * 12, 15, 10,5);}
        }
    }
    pop();

}

// function mapToColorText(arr,lx,ly,rot,sc,fade) {
//     textSize(15);
//     textAlign(CENTER);
//     push();
//     translate(lx,ly);
//     rotate(radians(rot));
//     scale(sc);
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr[0].length; j++) {
//              let value = arr[i][j];
//               if ( value == "money" ) {
//                   fill(20,170,0, fade);
//               } else if ( value == "blood" ){
//                   fill(200,0,30, fade);
//               } else {
//                   fill(255, fade);
//               }
//                text(value, j * 35, i * 10,100);
//         }
//     }
//     pop();

// }





//                             //2darray,images in array ,x,y,rot,scale, alpha
//  function mapToBitMaps(arr,imgarr,lx,ly,rot,sc) {
//             push();
//             translate(lx,ly);
//             rotate(radians(rot));
//             scale(sc);
//             let nuimg;
//             for (var i = 0; i < arr.length; i++) {
//                 for (var j = 0; j < arr[0].length; j++) {
//                      let value = arr[i][j];
//                       if ( value == 0 ) {
//                         nuimg = imgarr[0];
//                       } else if ( value == 1 ){
//                         nuimg = imgarr[2];
//                       } else if ( value == 2 ) {
//                         nuimg = imgarr[1];
//                       } else {
//                         nuimg = imgarr[3];
//                       }
//                     image(nuimg, j * 12, i * 12, 14, 14);
//                 }
//             }
//             pop();
        
// }

//     //2darray,images in array ,x,y,rot,scale, alpha
//     function mapToTintedBitMaps(arr,imgarr,lx,ly,rot,sc,fade) {
//     push();
//     translate(lx,ly);
//     rotate(radians(rot));
//     scale(sc);
//     let nuimg;
//     let c;
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr[0].length; j++) {
//                 let value = arr[i][j];
//                 if ( value == 0 ) {
//                 nuimg = imgarr[3];
//                 c = color(255,100,0,fade);
//                 } else if ( value == 1 ){
//                 c = color(255,0,255,fade);
//                 nuimg = imgarr[2];
//                 } else if ( value == 2 ) {
//                 nuimg = imgarr[1];
//                 c = color(20,200,120,fade);
//                 } else {
//                 nuimg = imgarr[0];
//                 c = color(120,0,240,fade);
//                 }
            
//             c = color(255,fade);
//             tint(c);
//             image(nuimg, j * 9, i * 9, 15, 15);
//         }
//     }
//     pop();

//     }

//     function mapToColorTextBitMap(arr,imgarr, lx,ly,rot,sc,fade) {
//         textSize(15);
//         textAlign(CENTER);
//         push();
//         translate(lx,ly);
//         rotate(radians(rot));
//         scale(sc);
//         for (var i = 0; i < arr.length; i++) {
//             for (var j = 0; j < arr[0].length; j++) {
//                 let value = arr[i][j];
//                 if ( value == "money"  ) {
//                 nuimg = imgarr[3];
//                 c = color(255,100,0,fade);
//                 } else if ( value == "face" ){
//                 c = color(255,0,255,fade);
//                 nuimg = imgarr[2];
//                 } else if ( value == "blood" ) {
//                 nuimg = imgarr[1];
//                 c = color(20,200,120,fade);
//                 } else {
//                 nuimg = imgarr[0];
//                 c = color(120,0,240,fade);
//                 }
//                 image(nuimg, j * 25, i * 12, 30, 15);
//             }
//         }
//         pop();
    
//     }
