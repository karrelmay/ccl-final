class monster extends Appearable {
    constructor(content, d,  x, y, xMin, xMax, yMin, yMax) {
        super(content);
        this.d = d;
        this.x = x;
        this.y = y;
        this.xMin = xMin;
        this.xMax = xMax;
        this.yMin = yMin;
        this.yMax = yMax;
        this.alive = true;
    }

    relocate(x, y) {
        this.x = x;
        this.y = y;
    }

    randomRelocate() {
        this.relocate(random(this.xMin, this.xMax), random(this.yMin, this.yMax));
    }

    kill() {
        this.alive = false;
    }

    check_alive() {
        return this.alive;
    }

    check_hit(x, y) {
        // console.log('test');
        if(this.x  < x && this.x + 400 > x && this.y  < y && this.y + 600 > y) {
            console.log('kill')
            this.kill();
        }
    }

    show() {
        image(this.content, this.x, this.y);
    }

    death() {
      image(this.d, this.x * 0.65, this.y * 0.65);
    }
}
