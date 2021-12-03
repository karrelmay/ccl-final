class EmitterParticle {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(15));
    this.acc = createVector(0, 0);
    this.r = r;
    this.lifetime = 255;
    this.lifeReduction = random(5, 7);
  }
  finished() {
    return (this.lifetime < 0);
  }
  applyForce(force) {
    this.acc.add(force);
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    //
    this.lifetime -= this.lifeReduction;
  }
  show() { // adjust colors later
    push();

    let changeColor = map(this.pos.x, 0, width, 0, 255);
    let changeColor2 = map(this.pos.y, 0, height, 0, 255);
    blendMode(ADD);
    noStroke();
    fill(changeColor, this.lifetime, changeColor2, this.lifetime);
    // fill(120, 80, 5, this.lifetime);
    let dia = map(this.lifetime, 0, 255, 0, this.r * 2);
    circle(this.pos.x, this.pos.y, dia);
    // circle(this.pos.x, this.pos.y, dia * 0.7);
    circle(this.pos.x, this.pos.y, dia * 0.5);
    circle(this.pos.x, this.pos.y, dia * 0.2);
    pop();
  }
}
