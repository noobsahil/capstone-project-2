const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var fruit;

var control = "sling";


function preload() {
  backgroundImg = loadImage("background.png");

  g = loadImage("basket.png")



}
function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

  fruit = new Melon(50, 50, 80);
  slingShot = new Slingshot(fruit.melon, { x: 250, y: 30 });


}
function draw() {
  background(backgroundImg);

  Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);

  imageMode(CENTER)
  image(g, 450, 310, 150, 150)

  fruit.display()
  ground.display()
  slingShot.display()


}

function mouseDragged() {

  if (control === "sling") {

    Matter.Body.setPosition(fruit.melon, { x: mouseX, y: mouseY })
  }
}

function mouseReleased() {
  slingShot.fly()
  control = "nosling";

}

function keyPressed() {
  if (keyCode === 32) {
    slingShot.attached(fruit.melon)

  }
}

