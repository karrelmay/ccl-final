class Particle {
  constructor(xMin, xMax, yMin, yMax, gray, maxs) {
    this.xMin = xMin;
    this.xMax = xMax;
    this.yMin = yMin;
    this.yMax = yMax;
    this.gray = gray;
    this.scl = 40;
    this.cols = floor(width/this.scl);
    this.rows = floor(height/this.scl);
    this.pos = createVector(random(this.xMin, this.xMax), random(this.yMin, this.yMax));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = maxs;
    this.prevPos = this.pos.copy();

  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  follow(vectors) {
    var x = floor(this.pos.x / this.scl);
    var y = floor(this.pos.y / this.scl);
    var index = x + y * this.cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show() {
    stroke(this.gray, 40);
    strokeWeight(5);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges() {
    if (this.pos.x > this.xMax) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < this.xMin) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > this.yMax) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < this.yMin) {
      this.pos.y = height;
      this.updatePrev();
    }

  }

}
