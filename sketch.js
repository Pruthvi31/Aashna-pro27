
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobOb1, bobOb2, bobOb3, bobOb4, bobOb5;
var rope1, rope2, rope3, rope4, rope5;
var roofObject1, roofObject2, roofObject3, roofObject4, roofObject5;
var world;



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	
	roofObject=new Roof(width/2,height/2,width/7,20);
	bobOb1 = new Bob(200,450,40);
	bobOb2 = new Bob(241,450,40);
	bobOb3 = new Bob(282,450,40);
	bobOb4 = new Bob(323,450,40);
	bobOb5 = new Bob(264,450,40);
	
	bobDiameter=40;

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  rope1 = new Rope(bobOb1.body, roofObject.body,-bobDiameter*2,0);
	rope2 = new Rope(bobOb2.body, roofObject.body,-bobDiameter*2,0);
	rope3 = new Rope(bobOb3.body, roofObject.body,-bobDiameter*2,0);
	rope4 = new Rope(bobOb4.body, roofObject.body,-bobDiameter*2,0);
	rope5 = new Rope(bobOb5.body, roofObject.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	
	bobOb1.display();
	bobOb2.display();
	bobOb3.display();
	bobOb4.display();
	bobOb5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
		roofObject.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobOb1.body,bobOb1.body.position,{x:100,y:-185});
  
	}
}



