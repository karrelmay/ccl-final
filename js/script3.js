let handpose;
let video;
let predictions = [];
let emitter;

// //soundeffect
// let sound;
// let amp;

//monsters
let goblin =[]
let dragon =[]


function preload(){
    bg = loadImage("assets/panel.png");
    goblin1 = loadImage("assets/goblin1.png");
    goblin2 = loadImage("assets/goblin2.png");
    goblin3 = loadImage("assets/goblin3.png");
    d1 = loadImage("assets/effect1.png");
    d2 = loadImage("assets/effect2.png")
    d3 = loadImage("assets/effect3.png")
    d4 = loadImage("assets/effect4.png")
    d5 = loadImage("assets/effect5.png")
}

let handX, handY;

function setup() {
  let canvas = createCanvas(2388 * 0.65, 1668 *0.65);
  canvas.id("canvas-container-game");
  // let canvas = createCanvas(640, 480);
  // canvas.id("canvas-container")

  frameRate(60);
  xscale = 2388 / 640 * 0.65;
  yscale = 1668 / 480 * 0.65;
  Entry = new Entry(1000);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  img = createImage(width, height); // a blank image
  p1 = new Img(bg, 5, 0);
  monsters = [];
  deads = [];

  for (let i = 0; i<50; i++) {
      let arr = [goblin1, goblin2, goblin3];
      let darr = [d1, d2, d3, d4, d5];
      let goblin = new monster(random(arr), random(darr), 0, 0, 100, 2000, 450, 600);
      goblin.randomRelocate();
      monsters.push(goblin);
  }
  counter = 0;

  handpose = ml5.handpose(video, modelReady);
  handpose.on("predict", (results) => {
  predictions = results;

});

  emitter = new Emitter(width / 2, height / 2, 12);
  mc = new MagicCircle(0.5, 0, 0);
}

function modelReady() {
  console.log("model rdy")
}

function draw() {
  background(0);
    push();
    // image(video, 0, 0, width, height);
    // push();
    // // blendMode(OVERLAY);
    // // fill(0,0,0, 95);
    // rect(0,0,width, height);
    pop();

    // image(video, 0, 0, width, height);

  // pixel manipulation

  video.loadPixels();
  img.loadPixels();
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (x + y * video.width) * 4;
      // video
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let avg = (r + g + b) / 3;
      // img
      if (avg > 100) {
        // white!
        img.pixels[index + 0] = r; // R
        img.pixels[index + 1] = g; // G
        img.pixels[index + 2] = b; // B
        img.pixels[index + 3] = 255; // A
      } else {
        // black!
        img.pixels[index + 0] = 0; // R
        img.pixels[index + 1] = 0; // G
        img.pixels[index + 2] = 0; // B
        img.pixels[index + 3] = 255; // A
      }
    }
  }

  img.updatePixels();
    image(img, 0, 0);


  if (predictions.length > 0) {
    // hand is detected
    let hand = predictions[0];
    let middleFinger = hand.annotations.middleFinger;
    let middleBase = middleFinger[0];
    //let palmBase = hand.annotations.palmBase;
    //let palm = palmBase[0];

    // generate the particles

    // check hand position's score
    handX = middleBase[0];
    handY = middleBase[1];

    emitter.updatePosition(handX * xscale, handY * yscale);
    emitter.emit(4);
    mc.relocate(handX * xscale, handY * yscale);
    mc.show();
    // console.log(handX, handY);
  }

  // if (mouseIsPressed) {
  //   handX = mouseX;
  //   handY = mouseY;
  //   emitter.updatePosition(handX, handY);
  //   emitter.emit(4);
  // }

  // update and display
  emitter.update();
  emitter.show();
  push();
  scale(0.65);
  p1.show();
  pop();

  if (counter >=0 && counter <= 0) {
      Entry.show();
  }
  if (counter == 1) {
      Entry.exit();
  }

  if(counter >= 1 && monsters.length != 0){
      push();
      scale(0.65);
      monsters[0].show();
      pop();
      // console.log(monsters[0].x, monsters[0].y);
      // console.log(handX, handY)
      monsters[0].check_hit(handX * xscale / 0.65, handY * yscale / 0.65);
      if (!monsters[0].check_alive()) {
          deads.push(monsters[0]);
          setTimeout(function() {deads.splice(0, 1);}, 3000)
          monsters.splice(0, 1);
      }
  }
  deads.forEach(x => x.death());

}

function mousePressed() {
    counter += 1;
}
