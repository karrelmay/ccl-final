class Noisefield {
    constructor(xMin, xMax, yMin, yMax, gray, n, maxs) {
        this.inc = 0.1;
        this.scl = 40;
        this.zoff = 0;
        this.flowfield = new Array(166 * 238);
        this.particles = [];
        this.cols = floor(width/this.scl);
        this.rows = floor(height/this.scl);
        for(var i = 0; i < n; i++) {
            this.particles[i] = new Particle(xMin, xMax, yMin, yMax, gray, maxs);
        }
    }

    show() {
        for (var i = 0; i < this.particles.length; i++) {
                this.particles[i].show();

        }
    }

    flow() {
        var yoff = 0;
        for (var y = 0; y < this.rows; y++) {
            var xoff = 0;
            for (var x = 0; x < this.cols; x++) {
              var index = x + y * this.cols;
              var angle = noise(xoff, yoff, this.zoff) * TWO_PI * 4;
              var v = p5.Vector.fromAngle(angle);
              v.setMag(1);
              this.flowfield[index] = v;
              xoff += this.inc;
              stroke(0, 50);
            }
            yoff += this.inc;

            this.zoff += 0.0003;
         }

        for (var i = 0; i < this.particles.length; i++) {
                this.particles[i].follow(this.flowfield);
                this.particles[i].update();
                this.particles[i].edges();
                this.particles[i].show();

        }
    }
}
