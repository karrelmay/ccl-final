function preload() {
    img2_1_bg = loadImage("assets/2.1-bg.png");
    img2_1_text = loadImage("assets/2.1-text.png");
    petal1 = loadImage("assets/petal1.png");
    petal2 = loadImage("assets/petal2.png");
    petal3 = loadImage("assets/petal3.png");
    petal4 = loadImage("assets/petal4.png");
    petal5 = loadImage("assets/petal5.png");
    img2_2_bg = loadImage("assets/2.2-bg.png");
    img2_2_drawing = loadImage("assets/2.2-drawing.png");
    img2_2_arm = loadImage("assets/2.2-drawing-arm.png");
    img2_3_art = loadImage("assets/2.3-art.png");
    img2_3_text = loadImage("assets/2.3-text.png");
    img2_4_bg = loadImage("assets/2.4-bg.png");
    img2_4_drawing = loadImage("assets/2.4-drawing.png");
    img2_4_text = loadImage("assets/2.4-text.png");
}

function setup() {
    let canvas = createCanvas(1080, 754);
    canvas.id("canvas-container");

    push();
    fill('black');
    rect(430, 2, 1075 - 430, 225);
    pop();
    bg2_1 = new Img(img2_1_bg, 5, 0);
    bg2_1.show();
    p1 = new Img(img2_1_text, 25, 0);
    bg2_2 = new Img(img2_2_bg, 5, 0);
    bg2_2.show();
    bg2_4 = new Img(img2_4_bg, 5, 0);

    p2 = new Img(img2_2_drawing, 25, 0);
    p3 = new turnable(img2_2_arm, 25, 0);
    p4 = new Img(img2_3_art, 25, 0);
    p5_1 = new Img(img2_3_text, 25, 0);
    p6 = new Img(img2_4_drawing, 25, 0);
    p7 = new Img(img2_4_text, 25, 0);
    Noisefield = new Noisefield(425, 1075, 2, 225, 0, 500, 0.2);
    petalArr = [petal1, petal2, petal3, petal4, petal5];
    PetalRain = new PetalRain(10, 380, 10, 420, petalArr, 2, 3);
    seq = [p1, p2, p4, p5_1, p6, p7];
    activeSeq = [];
    counter = 0;
    Emitter = new Emitter(565, 339, 8);
    Mc = new MagicCircle(0.2, 664, 635);
    //frameRate(1);
}


function draw() {
    background("black");
    bg2_1.show();
    bg2_2.show();
    bg2_4.show();
    if (counter <= 1) {
        Noisefield.flow();
    } else {
        Noisefield.show();
    }
    if (counter >= 2 && counter <= 2) {
        p3.turn();
        p3.show();
    } else if (counter >= 3) {
        p3.show()
    }


    activeSeq.forEach(x=>x.fade());


    if (counter >= 2 && counter <= 2) {
        PetalRain.rain();
    } else if (counter >= 3) {
        PetalRain.show();
    }



    if (counter >= 4 && counter <= 5) {
        Emitter.emit(4);
        Emitter.update();
        Emitter.show();
    } else if (counter >= 6) {
        Emitter.show();
    }

    if (counter >= 6 && counter <=6) {
        Mc.show();
    }

}

function mousePressed() {
    console.log(mouseX, mouseY);
    if(counter < seq.length) {
        activeSeq.push(seq[counter]);
        counter += 1;
    }
}
