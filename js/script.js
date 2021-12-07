let close = document.getElementById('close')
let modal_container = document.getElementById('modal_container')
let start = false;
let playerName;

document.getElementById('close').onclick = function(){
  playerName = document.getElementById('name-input').value;
  console.log("hello", playerName);
}

close.addEventListener('click', () => {
  modal_container.classList.add('close')
  start = true;
});



function preload() {
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
  img1_3_effect = loadImage("assets/1.3-effect.png");
}

function setup() {
  let canvas = createCanvas(1080, 754);
  canvas.id("canvas-container");
  background(220);
  background("black");
  push();
  fill('grey');
  rect(430, 2, 1075 - 430, 225);
  pop();
  bg1_2 = new Img(img1_2_bg, 5, 0);
  bg1_2.show();
  bg1_3 = new Img(img1_3_bg, 5, 0);
  bg1_3.show();
  bg1_4 = new Img(img1_4_bg, 5, 0);
  bg1_4.show();
  effect1_3 = new Img(img1_3_effect, 5, 0);
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
  Noisefield = new Noisefield(425, 1075, 2, 225, 255, 100, 4);
}

let shakingCounter = 0;
let shakingMode = 0;
let shaked = false;

function draw() {
  if (counter >= 5 && counter <= 5) {
      effect1_3.show();
  }


  if (counter >= 1 && counter <= 2) {
    Noisefield.flow();
  }

  activeSeq.forEach(x => x.fade());

  if (counter >= 6) {
      textFont("Comic Sans MS");
      textSize(20);
      text(playerName, 55, 360);
  }
}

function mousePressed() {
    console.log(mouseX, mouseY);
  if (counter < seq.length && start) {
    activeSeq.push(seq[counter]);
    counter += 1;
  }
}
