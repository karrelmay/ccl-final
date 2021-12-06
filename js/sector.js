class sector {
    constructor(angle, n, vel) {
        this.vel = vel;
        this.d = 1;
        this.angle = angle;
        this.n = n;
        this.p0x = 0;
        this.p0y = 0;
        this.p1x = 0;
        this.p1y =0;
        this.p2x = 0;
        this.p2y = 0;
        this.p3x = this.p1x - 2000 * Math.sin(this.angle/2);
        this.p3y = this.p1y - 2000 * Math.cos(this.angle/2);
        this.p4x = this.p1x + 2000 * Math.sin(this.angle/2);
        this.p4y = this.p1y - 2000 * Math.cos(this.angle/2);
    }

    update() {
        this.p1x = this.p1x - this.d * Math.sin(this.angle/2);
        this.p1y = this.p1y - this.d * Math.cos(this.angle/2);
        this.p2x = this.p2x + this.d * Math.sin(this.angle/2);
        this.p2y = this.p2y - this.d * Math.cos(this.angle/2);
    }

    improve() {
        if(this.d < 2000) {
            this.d += this.vel;
        }
    }

    check() {
        if(this.d < 2000) {
            return true;
        }
    }

    enterShow() {
        push();
        translate(width/2, height/2);
        fill('black');
        noStroke();
        rotate(this.n * this.angle);
        beginShape();
        vertex(this.p1x, this.p1y);
        vertex(this.p2x, this.p2y);
        vertex(this.p3x, this.p3y);
        vertex(this.p4x, this.p4y);
        endShape(CLOSE);
        pop();
    }

    exitShow() {
        push();
        translate(width/2, height/2);
        fill('black');
        noStroke();
        rotate(this.n * this.angle);
        beginShape();
        vertex(this.p1x, this.p1y);
        vertex(this.p2x, this.p2y);
        vertex(0, 0);
        endShape(CLOSE);
        pop();
    }
}
