var ball, b1,b2,b3, ground,ballimage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ballimage = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	b1 = new Box( 500, 670, 20, 20 );
	
	var options ={
		
		density: 1.2,
		friction: 6.5
	}
	
	var options2 ={
		isStatic: true
	}


	ball = Bodies.circle(50,670,20,options);

	ground = Bodies.rectangle(400, 690, 800, 20, options2);

	World.add(world, ball);

	World.add(world,ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  fill("blue");
 // ellipseMode(RADIUS);
  //ellipse(ball.position.x, ball.position.y, 20,20);
  imageMode(CENTER);
  image(ballimage, ball.position.x, ball.position.y, 40,40);
  //ground.display();
  drawSprites();
  rect(ground.position.x,ground.position.y,800,20);
  b1.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position, {x:45,y:-60});
   
	   }
	 }

