class Shakable extends Img{
    constructor(content, speed, sv) {
        super(content, speed, sv);
        this.x = 0;
        this.y = 0;
    }

    show() {
        image(this.content,this.x,this.y);
    }

    shake_up() {
        this.x += 10;
        this.y += 10;
    }

    shake_down() {
        this.x -= 10;
        this.y -= 10;
    }

    shake_reset() {
        this.x = 0;
        this.y = 0;
    }
}
