const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles=[] , plinkos=[] , divisions=[];
var divisionheight=300;
var engine,world,ground;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(240,790,480,20);
  
  Engine.run(engine);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);

  ground.display();

  //Creating and displaying DIVISIONS
  for(var k=0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionheight/2,10,divisionheight));
  }
  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  //Creating and displaying PLINKOS
  for(var j=40;j <= width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j <=width-10 ; j=j+50){
    plinkos.push(new Plinko(j,125));
  }
  for(var j=40;j <= width;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j=15;j <=width-10 ; j=j+50){
    plinkos.push(new Plinko(j,225));
  }
  for(var j=40;j <= width;j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j=15;j <=width-10 ; j=j+50){
    plinkos.push(new Plinko(j,325));
  }
  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display(); 
  }

  //Creating and displaying PARTICLES
  if(frameCount % 10 === 0){
    particles.push(new Particle(Math.round(random(50, 400)),40, 10));
  }
  for (var j = 0; j < particles.length; j++){
    particles[j].display(); 
  }

 // drawSprites();
}