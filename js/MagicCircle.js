class MagicCircle {
  constructor(ratio,x,y) {
    self.ratio = ratio
    this.x = x;
    this.y = y;
    this.st = 25;
  this.lis1 = [];
  this.lis3 = [];
  this.lis4 = [
    "咆","哮","炎","獅","，",
    "紅","蓮","業","火","，",
    "百","獸","之","王","，",
    "聽","憑","憤","怒","之","吼","叫","，",
    "吐","呐","炎","息","。",
    "跨","越","天","空","以","及","大","地","的","力","量","啊","，",
    "溫","柔","流","動","的","潺","潺","河","水","啊","，",
    "集","中","到","我","的","手","中","來","成","爲","我","的","力","量","吧","。",
    "力","量","化","為","虛","無","，",
    "魔","法","霧","散","，",
    "術","式","解","體","。",
  ];
  this.lis5 = [
    "光","明","之","神","，",
    "九","天","之","圣","，",
    "四", "方","之","灵","，",
    "王","者","之","魂","，",
    "降","临","与","此","，",
    "刻","下","神","圣","的","印","记","，",
    "赐","福","于","作","战","的","勇","者","，",
    "神","力","招","来","，",
    "予","以","神","圣","之","力","，",
    "強","化","。", "以",
    "空","間","主","神",
    "強","大","的","力","量","，",
    "無","比","的","神","力","，",
    "將","空","間","毀","滅","——","空","間","粉","碎","。",
    "高","嶺","之","風","，","禦","風","而","行","，",
    "迅","猛","衝", "鋒", "。",
  ];

  for (let i = 0; i < 5; i++) {
    let shape = new Shape(0, 0, 0, 200, this.st - (i * this.st) / 8, 0, 20, 80, 80, 80, 0, 6);
    append(this.lis1, shape);
  }

  this.lis3 = [];
  for (let i = 0; i < 5; i++) {
    let shape = new Shape(0, 0, 0, 320, this.st - (i * this.st) / 8, 0, 20, 80, 80, 80, 0, 6);
    append(this.lis3, shape);
  }


  this.lis = [];
  let c = 0;
  let rune_num = 80;
  for (let i = 0; i < rune_num; i++) {
    c += 1;
    if (c > 8) {
      c -= 8;
    }
    let rune = new Rune(c, 0, 0, 2, 10, 80, 200, 200, 0);
    append(this.lis, rune);
  }

  this.lis2 = [];
  c = 0;
  let rune_num2 = 150;
  for (let i = 0; i < rune_num2; i++) {
    c += 1;
    if (c > 8) {
      c -= 8;
    }
    let rune = new Rune(c, 0, 0, 3, 15, 80, 200, 200, 0);
    append(this.lis2, rune);
  }
  this.Red1 = 0;
  this.Green1 = 35;
  this.Blue1 = 97;
  this.alpha1 = 100;
  this.alpha2 = 80;
  this.Red2 = 80;
  this.Green2 = 200;
  this.Blue2 = 200;

  this.ang = 0;
  }

  relocate(x, y){
      this.x = x;
      this.y = y;
}

  show() {
      push();
      translate(this.x, this.y);
      scale(self.ratio);

      fill(this.Red1, this.Green1, this.Blue1, this.alpha1);
      ellipse(0, 0, 660);

      // glow
      for (let i = 0; i < 5; i++) {
        this.lis1[i].colo(this.Red1, this.Green1, this.Blue1, this.alpha2);
        this.lis3[i].colo(this.Red1, this.Green1, this.Blue1, this.alpha2);
        this.lis1[i].show(this.ang + 45, 0);
        this.lis1[i].show(-this.ang + 30, 0);
        this.lis3[i].show(this.ang / 2 + 15, 0);
      }

      textSize(12);
      strokeWeight(1);
      // stroke(255);
      stroke(this.Red2, this.Green2, this.Blue2);
      let k = this.lis4.length;
      for (let i = 0; i < k; i++) {
        let an = radians(-this.ang + (360 / k) * i);
        rotate(an);
        text(this.lis4[i], 0, -230);
        rotate(-an);
      }

      k = this.lis5.length;
      for (let i = 0; i < k; i++) {
        let an = radians(this.ang + (360 / k) * i);
        rotate(an);
        text(this.lis5[i], 0, -290);
        rotate(-an);
      }

      let shape1 = new Shape(0, 0, 0, 200, 5, 0, 80, 200, 200, 255, 0, 6);
      let shape2 = new Shape(0, 0, 0, 320, 5, 0, 80, 200, 200, 255, 0, 6);
      // body
      shape1.colo(this.Red2, this.Green2, this.Blue2);
      shape2.colo(this.Red2, this.Green2, this.Blue2);
      shape1.show(this.ang + 45, 0);
      shape1.show(-this.ang + 30, 0);
      shape2.show(this.ang / 2 + 15, 0);

      // glow
      this.st = 25;
      noFill();
      stroke(this.Red1, this.Green1, this.Blue1, this.alpha2);
      for (let i = 0; i < 5; i++) {
        strokeWeight(this.st - (i * this.st) / 8);
        ellipse(0, 0, 420);
        ellipse(0, 0, 660);

        strokeWeight(this.st - (i * this.st) / 6);
        ellipse(0, 0, 520);
      }

      // white body
      stroke(this.Red2, this.Green2, this.Blue2);

      strokeWeight(5);
      ellipse(0, 0, 420);
      ellipse(0, 0, 660);

      strokeWeight(10);
      ellipse(0, 0, 520);

      this.ang += 0.5;
      pop();
  }
}
