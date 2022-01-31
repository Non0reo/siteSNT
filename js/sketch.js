let rand1;
let rand2;
let rand3;
let font;

let textBox = [];
let texts = ["f(x) = x²", "1 + 1 = 2", "(a + b)²", "sqrt(2)", "cos(x)", "f(x) = ax + b", "]-∞ ; +∞[", "1/0 = ∞?", "a*b%k", "sqrt(x)**2 = x", "54 - x = 9"];

function preload() {
  font = loadFont('css/font/coolvetica.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  textFont(font);
  textAlign(CENTER, CENTER);
  //textSize(width / 32);
  textSize(40);
  rand1 = random(2000, 2500);
  rand2 = random(2000, 2500);
  rand3 = random(2000, 2500);

  for (let i = 0; i < texts.length; i++) {
    textBox[i] = new Text(texts[i]);
  }
}

function draw() {
  background(20);

  fill(255, 0, 0);
  ellipse(50, 0, 10, 10);

  fill(255);
  for (let i = 0; i < textBox.length; i++) {
    textBox[i].move();
    textBox[i].display();
  }

  rotateX(millis() / rand1);
  rotateY(millis() / rand2);
  rotateZ(millis() / rand3);
  box(120);
}

class Text{
  constructor(text){
    this.text = text;
    this.speed = random(2, 8);
    this.x = random(0 - width/3, 0 + width/3);
    this.y = height + random(60);
  }

  move(){
    this.y -= this.speed; 

    if(this.y <= -height/1.7){
      this.y = height;
      this.x = random(-width, width);
    }
  }

  display(){
    text(this.text, this.x, this.y);
  }

  debug(){
    console.log(this.text, this.speed, this.x, this.y);
  }
}