const Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies,
Render=Matter.render,
Events=Matter.Events;

 var engine, world;

var particles=[];
var plinkos=[];
var division=[];
var divisionHeight=300;
var ground1,ground2,ground3;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

ground1 = new Ground(100,800,1700,15);
ground2=new Ground(480,650,15,800);
ground3=new Ground(15,480,15,800);
  
for(var k =5;k<=width;k=k+80){
division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}

for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,75));
}

for (var j = 50; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,175));
}

 for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,275));
}

 for (var j = 50; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,375));
}

}
 

function draw() {
background("black");
Engine.update(engine);
ground1.display();
ground2.display();
ground3.display();

for (var i = 0; i < plinkos.length; i++) {
  plinkos[i].display();
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
}

for (var j = 0; j < particles.length; j++) {
  particles[j].display();
}
for (var k = 0; k < division.length; k++) {
  division[k].display();
}
}