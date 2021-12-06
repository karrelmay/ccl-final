class turnable extends Img {
    constructor(content) {
        super(content);
        this.angle = -4 * Math.PI/60;
        this.max = -3 * Math.PI/60;
        this.min =  -4 * Math.PI/60;
        this.direction = 0;
    }

    show() {
        push();
        translate(184, 215);
        rotate(this.angle);
        translate(-184, -215);
        image(this.content,0,0);
        pop();
    }

    turn() {
        if(this.direction == 0) {
            this.angle += Math.PI/2000;
        } else {
            this.angle -= Math.PI/2000;
        }
        if(this.angle > this.max) {
            this.direction = 1;
        } else if (this.angle < this.min) {
            this.direction = 0;
        }
    }
}
