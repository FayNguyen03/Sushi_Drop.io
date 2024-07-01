let font;
let x0, y0;
let x, y = 150, w = 90, h = 5;
let size = 100;
let alphabets = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Y", "Z"]
let l;

function preload(){
  font = loadFont("fonts/Sushi Sushi.ttf");
}

function setup() {
  createCanvas(400, 400);
  x0 = width / 2;
  y0 = height / 2;
  l = new Letter();

}

function draw() {
  background(220);
  x = mouseX;
  rect(x, y , w, h);
  l.update(x, y , w, h);
  l.display();
}
