class Rune {
  constructor(word_choice, x_cen, y_cen, w, r, R, g, b, a) {
    this.choice = word_choice;
    this.x_cen = x_cen;
    this.y_cen = y_cen;
    this.r = r;
    this.R = R;
    this.g = g;
    this.b = b;
    this.a = a;
    this.w = w;
  }

  colo(r, g, b, alp) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.alp = alp;
  }

  Rotate(r, a) {
    this.x_cen = r * cos(radians(a - 90));
    this.y_cen = r * sin(radians(a - 90));
    this.a = a;
  }

  move(x, y) {
    this.x_cen = x;
    this.y_cen = y;
  }

  show(a) {
    let k = this.a;
    if (a == undefined) {
      this.a = k;
    } else {
      this.a = a;
    }
    strokeWeight(this.w);
    noFill();

    let len = this.r / 4;
    let len2 = this.r / 2;
    let len3 = this.r / 1.5;

    let an = radians(this.a);
    let an1 = radians(this.a + 180);
    let an2 = radians(this.a - 90);
    let an3 = radians(this.a + 90);
    let an4 = radians(this.a - 45);
    let an5 = radians(this.a + 45);
    let an6 = radians(this.a - 135);
    let an7 = radians(this.a + 135);

    if (this.choice == 29) {

      this.xp1 = this.x_cen + len2 * cos(an2);
      this.yp1 = this.y_cen + len2 * sin(an2);

      this.xp2 = this.x_cen + len2 * cos(an3);
      this.yp2 = this.y_cen + len2 * sin(an3);

      this.xp3 = this.x_cen + len2 * cos(an4);
      this.yp3 = this.y_cen + len2 * sin(an4);

      this.xp4 = this.x_cen + len * cos(an4);
      this.yp4 = this.y_cen + len * sin(an4);

      this.xp5 = this.x_cen + len2 * cos(an6);
      this.yp5 = this.y_cen + len2 * sin(an6);

      this.xp6 = this.x_cen + len * cos(an6);
      this.yp6 = this.y_cen + len * sin(an6);

      stroke(this.R, this.g, this.b);
      line(this.xp2, this.yp2, this.xp1, this.yp1);
      line(this.xp4, this.yp4, this.xp1, this.yp1);
      line(this.xp6, this.yp6, this.xp1, this.yp1);
      line(this.xp4, this.yp4, this.xp3, this.yp3);
      line(this.xp6, this.yp6, this.xp5, this.yp5);
    }
  }
}
