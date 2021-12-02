function preload(){
  img1_1_art = loadImage("assets/1.1-art.png");
  img1_1_text = loadImage("assets/1.1-text.png");
  img1_2_bg = loadImage("assets/1.2-bg.png");
  img1_2_art = loadImage("assets/1.2-art.png");
  img1_2_text = loadImage("assets/1.2-text.png");
  img1_3_art = loadImage("assets/1.3-art.png");
  img1_3_bg = loadImage("assets/1.3-bg.png");
  img1_3_text = loadImage("assets/1.3-text.png");
  img1_4_player = loadImage("assets/1.4-player.png");
  img1_4_art = loadImage("assets/1.4-art.png");
  img1_4_effect = loadImage("assets/1.4-effect.png");
  img1_4_bg = loadImage("assets/1.4-bg.png");
  img1_4_text = loadImage("assets/1.4-text.png");
}


function setup() {
    let canvas = createCanvas(2388, 1668);
  canvas.id("canvas-container");
  background(220);
  background("black");
  push();
  fill('grey');
  rect(950, 5, 2388-950, 500-5);
  pop();
  bg1_2 = new Img(img1_2_bg, 5, 0);
  bg1_2.show();
  bg1_3 = new Img(img1_3_bg, 5, 0);
  bg1_3.show();
  bg1_4 = new Img(img1_4_bg, 5, 0);
  bg1_4.show();
  p1 = new Img(img1_1_art, 25, 0);
  p2 = new Img(img1_1_text, 25, 0);
  p3 = new Img(img1_2_art, 25, 0);
  p4 = new Img(img1_2_text, 25, 0);
  p5_1 = new Img(img1_3_art, 25, 0);
  p6 = new Img(img1_3_text, 25, 0);
  p7 = new Shakable(img1_4_player, 25, 0);
  p8 = new Img(img1_4_art, 25, 0);
  p9 = new Img(img1_4_effect, 25, 0);
  p10 = new Img(img1_4_text, 25, 0);
  seq = [p1, p2, p3, p4, p5_1, p6, p7, p8, p9, p10];
  activeSeq = [];
  counter = 0;
  Noisefield = new Noisefield(950, 2388, 5, 500, 255, 100, 4);
  // cols = floor(width / scl);
  // rows = floor(height / scl);
  // for (var i = 0; i < 100; i++) {
  //     particles[i] = new Particle(950, 2388, 5, 500);
  // }
  Background_1_2 = new Background_1_2();
}

let shakingCounter = 0;
let shakingMode = 0;
let shaked = false;

function draw() {


   if(counter >= 5 && counter <= 5) {
       Background_1_2.show();
       Background_1_2.change();
   }

   //console.log(frameCount);

   // if(counter >= 8 && shakingCounter < 10) {
   //     if(!shaked) {
   //         currentFc = frameCount;
   //         shaked = true;
   //     }
   //     console.log(currentFc);
   //     if (frameCount - currentFc > 2) {
   //         if (shakingMode == 0) {
   //             p7.shake_up();
   //         } else if (shakingMode == 1 || shakingMode == 3) {
   //             p7.shake_reset();
   //         } else {
   //             p7.shake_down();
   //         }
   //         currectFc = frameCount;
   //         shakingMode = (shakingMode + 1) % 4;
   //         console.log(shakingMode);
   //         shakingCounter += 1;
   //         shaked = false;
   //     }
   // }
   //
   // if(counter >= 8 && !shaked) {
   //     p7.shake_up();
   //     shaked = true;
   //     console.log('test')
   // }


  if(counter >= 1 && counter <= 2) {
      Noisefield.flow();
  }

  activeSeq.forEach(x=>x.fade());
}

function mousePressed() {
    if(counter < seq.length) {
        activeSeq.push(seq[counter]);
        counter += 1;
    }
}
