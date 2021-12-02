class Fallable extends Appearable {
    constructor(content, x, y, ratio, vel) {
        super(content);
        this.ratio = ratio;
        this.vel = vel;
        this.x = x;
        this.y = y;
    }

    show() {
        image(this.content, this.x, this.y);
    }

    fall() {
        this.x += this.vel;
        this.y += this.vel * this.ratio;
    }
}
