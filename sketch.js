
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var world,boy;
var stone;
var slingshot;

function preload(){
  boy=loadImage("images/boy.png");
 //stoneObj=loadImage("images/stone.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2= new mango(1130,165,30);
	mango3=new mango(1200,120,30);
	mango4=new mango(1050,150,30);
	mango5=new mango(1180,200,30);
	mango6=new mango(1050,230,30);
	mango7=new mango(997,210,30);

	treeObj=new tree(1100,590);
	groundObject=new ground(width/2,600,width,20);

  stone = new Stone(200,200,60);
  
 slingshot = new Slingshot(stone.body,{x:235,y:420});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
Engine.update(engine);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  

  groundObject.display();
  //fill("red");
   stone.display();

   slingshot.display();


   detectollision(stone,mango1);
   detectollision(stone,mango2);
   detectollision(stone,mango3);
   detectollision(stone,mango4);
   detectollision(stone,mango5);
   detectollision(stone,mango6);
  

   
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingshot.fly();
}

function detectollision(stoneObject, mangoObject) {
	mangoPos = mangoObject.body.position;
	stonePos = stoneObject.body.position;

	var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
	if(distance <= stoneObject.r + mangoObject.r ) {
		Matter.Body.setStatic(mangoObject.body, false);
	}
}

function keyPressed() {
    if(keyCode === 32) {
        slingshot.attach(stone.body);
    }
}