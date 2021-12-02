class Emitter {
  constructor(x, y, r) {
    this.position = createVector(x, y);
    this.EmitterPartcile = [];
    this.r = r;
  }
  updatePosition(x, y) {
    this.position.set(x, y);
  }
  emit(num) {
    for (let i = 0; i < num; i++) {
      this.EmitterPartcile.push(new EmitterParticle(this.position.x, this.position.y, this.r));
    }
  }
  update() {
    for (let EmitterParticle of this.EmitterPartcile) {
      // let gravity = createVector(0, 0.2);
      // EmitterParticle.applyForce(gravity);
      EmitterParticle.update();
    }
    for (let i = this.EmitterPartcile.length - 1; i >= 0; i--) {
      if (this.EmitterPartcile[i].finished()) {
        this.EmitterPartcile.splice(i, 1);
      }
    }
  }
  show() {
    for (let EmitterParticle of this.EmitterPartcile) {
      EmitterParticle.show();
    }
  }
}
