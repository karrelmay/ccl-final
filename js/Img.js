class Img extends Appearable{
    constructor(content, speed, sv) {
        super(content);
        this.fadein = true;
        this.speed = speed;
        this.currentValue = sv;
    }

    fade() {
        if(this.currentValue < 255) {
            push();
            tint(255, this.currentValue);
            image(this.content,0,0);
            this.currentValue += this.speed;
            pop();
        } else {
            this.show()
        }
    }
}
