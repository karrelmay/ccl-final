class PetalRain {
    constructor(xMin, xMax, yMin, yMax, arr, ratio, vel) {
        this.xMin = xMin;
        this.xMax = xMax;
        this.yMin = yMin;
        this.yMax = yMax;
        this.activeSeq = [];
        this.max = 10;
        this.ratio = ratio;
        this.vel = vel;
        this.arr = arr;
    }

    generate() {
        if(this.activeSeq.length < this.max) {
            if(random() < 1) {
                let content = random(this.arr);
                let petal = new Fallable(content, random(this.xMin, this.xMax), this.yMin, this.ratio, this.vel);
                this.activeSeq.push(petal);
            }
        }
    }

    out() {
        let i = 0;
        while(i < this.activeSeq.length) {
            if(this.activeSeq[i].x > this.xMax || this.activeSeq[i].y > this.yMax) {
                this.activeSeq.splice(i, 1);
            } else {
                i += 1
            }
        }
    }

    rain() {
        this.generate();
        this.activeSeq.forEach(x => x.show());
        this.activeSeq.forEach(x => x.fall());
        this.out();
    }

    show() {
        this.activeSeq.forEach(x => x.show());
    }
}
