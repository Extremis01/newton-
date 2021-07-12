			const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball;
var ground;
var con;
var ball2
var con2  ;
var ball3
var con3  ;
var ball4
var con4  ;
var ball5
var con5 ;



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball_options = {
		restitution: 0.8
	  }
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	ball = Bodies.circle(10,50,10,ball_options);
	World.add(world,ball);
  
	ball2 = Bodies.circle(10,50,10,ball_options);
	World.add(world,ball2);
	
	ball3 = Bodies.circle(10,50,10,ball_options);
	World.add(world,ball3);
	
	ball4 = Bodies.circle(10,50,10,ball_options);
	World.add(world,ball4);
	
	ball5 = Bodies.circle(10,50,10,ball_options);
	World.add(world,ball5);
	
  
	
	
	con2=Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:290,y:100},
		bodyB:ball2,
		pointB:{x:0,y:0},
		length:20,
		stiffess:0.2
	
	  })
	 
	  con=Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:310,y:100},
		bodyB:ball,
		pointB:{x:0,y:0},
		length:20,
		stiffess:0.1
	  });
	  
	  con3=Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:310,y:100},
		bodyB:ball3,
		pointB:{x:0,y:0},
		length:20,
		stiffess:0.1
	  });
	  con3=Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:310,y:100},
		bodyB:ball3,
		pointB:{x:0,y:0},
		length:20,
		stiffess:0.1
		
	  });
	  con4=Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:310,y:100},
		bodyB:ball4,
		pointB:{x:0,y:0},
		length:20,
		stiffess:0.1
	  });
	  con5=Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:310,y:100},
		bodyB:ball5,
		pointB:{x:0,y:0},
		length:20,
		stiffess:0.1
	  });
	  
	  
	
	ellipseMode(RADIUS);
	World.add(world,con2)
	World.add(world,con)
	World.add(world,con3)
	World.add(world,con4)
	World.add(world,con5)
	
  }
  
  
  function draw() 
  {
	background(51);
	Engine.update(engine);
	ellipse(ball.position.x,ball.position.y,10);
	ellipse(ball2.position.x,ball2.position.y,15);
	ellipse(ball3.position.x,ball3.position.y,10);
	ellipse(ball4.position.x,ball4.position.y,15);
	ellipse(ball5.position.x,ball5.position.y,10);


	rect(roof.position.x,roof.position.y,230,20);
	push();
	strokeWeight(2);
	stroke(255);
	line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
	
	line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  
	line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
	
	line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
	
	line(con5.pointA.x,con.pointA.y,bal5l.position.x,ball5.position.y);
	pop();
	
	
  
  
	
  }
  
  function keyPressed()
  {
	if(keyCode==RIGHT_ARROW)
	  {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
		
	  }
  }
  
	  
  

