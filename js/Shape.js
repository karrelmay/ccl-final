class Shape {
  constructor(cen_x, cen_y, dis, R, w, ang, r, g, b, alp, Fill, num) {
    this.cen_x = cen_x + dis * cos(radians(this.ang - 90));
    this.cen_y = cen_x + dis * sin(radians(this.ang - 90));
    this.d = dis;
    this.R = R;
    this.w = w;
    this.ang = ang;
    this.r = r;
    this.g = g;
    this.b = b;
    this.alp = alp;
    this.num = num;
    this.Fi = Fill;
  }

  colo(r, g, b, alp) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.alp = alp;
  }

  show(ang, a) {
    this.ang = ang;
    this.offset = 360 / this.num;

    stroke(this.r, this.g, this.b, this.alp);
    strokeWeight(this.w);
    if (this.Fi == 1) {
      fill(this.r, this.g, this.b, this.alp);
    } else {
      noFill();
    }

    this.cen_x = 0 + this.d * cos(radians(a - 90));
    this.cen_y = 0 + this.d * sin(radians(a - 90));

    beginShape();
    for (let j = 0; j < this.num; j++) {
      let x = this.cen_x + this.R * cos(radians(this.ang + this.offset * j));
      let y = this.cen_y + this.R * sin(radians(this.ang + this.offset * j));
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
