let font;
let x0, y0;
let x;
let y = 150;
let w = 90;
let h = 5;
let alphabets = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Y", "Z"]
let letters = [];
let nums = 100;

function preload(){
  font = loadFont("fonts/Sushi Sushi.ttf");
}

function setup() {
  createCanvas(1000, 600);
  for (let i = 0; i < nums; i++){
    letters[i] = new Letter();
  }
}

function draw() {
  background(220);
  x = mouseX;
  fill(255);
  rect(x, y, w, h);
  for (let i = 0; i < nums; i++){
    letters[i].update(x, y, w, h);
    letters[i].display();
  }
}
