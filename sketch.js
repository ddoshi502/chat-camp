var form;
var game;
var game1;
var player;

function setup() {
  createCanvas(800,400);
 form = new Form();
 game = new Game();
 game1 = new Game1();
 player = new Player();

}

function draw() {
 
  background(255,255,255);  
 
  form.display();
  game.display();
  game1.display();
  player.display();
}