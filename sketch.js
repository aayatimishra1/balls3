const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, dustbin1;
var paper, ground;

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);

	gameState = "start";

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin1 = new dustbin(620, 390);
	paper = new Paper(100, 300, 10);
	ground = Bodies.rectangle(width/2, 400, width, 10,{isStatic: true });
	
	  World.add(world, ground);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (gameState === "start") {
    background("black");
    textSize(20);
	fill("red");
	text("This is small game that will teach you the importance of throwing away your trash. \n                 Press Up Arrow to Start, and Up to throw away the trash.", 50, 200);
	if (keyCode === UP_ARROW) {
		gameState = "play"
	  }
	}
	if (gameState === "play") {
	  rectMode(CENTER);
	  background(0);
	  dustbin1.display();
	  paper.display();
  
	}
  
  
  drawSprites();
}
 
  function keyPressed(){
	if (keyCode === UP_ARROW && gameState === "play") {
	  Matter.Body.applyForce(paper.body, paper.body.position, {
		x: 12,
		y: -13
	  });
	}
  }


