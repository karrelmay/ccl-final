class Background_1_2 {
    constructor() {
        this.delta = random(1)/100;
        this.yoff = 0;
        this.xoff = 0;
        this.inc = 0.01;
    }

    show() {
        this.yoff = this.delta
        loadPixels();
        for (let y = 10; y < 1030; y++) {
          this.xoff = this.delta;
          for (let x = 10; x < 920; x++) {
            let index = (x + y * width) * 4;
            let r = noise(this.xoff, this.yoff) * 255;
            pixels[index + 0] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = 255;
            this.xoff += this.inc;
          }
          this.yoff += this.inc;
        }
        updatePixels();
    }

    change() {
        this.delta += noise(1)/10;
    }
}
