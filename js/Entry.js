class Entry {
    constructor(n) {
        this.delta = n;
        this.theta = 2*PI / this.delta + 0.01;
        this.sectors = []
        for(let i=0; i<this.delta; i++) {
            let t = new sector(this.theta, i, random(80,130));
            this.sectors.push(t);
        }
    }

    show() {
        for(let i=0; i < this.delta; i++) {
            this.sectors[i].show();
        }
    }

    exit() {
        for(let i=0; i < this.delta; i++) {
            this.sectors[i].show();
            this.sectors[i].improve();
            this.sectors[i].update();
        }
    }

    check() {
        for(let i = 0; i< this.delta; i++) {
            if(!this.sectors[i].check()) {
                return false;
            }
        }
        return true;
    }
}
