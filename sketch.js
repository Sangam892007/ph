const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine

var ground


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var stop = {
        isStatic:true
    }
    var bounce = {
        restitution:0.8
    }
    box = Bodies.rectangle(300,200,100,50);
    ground = Bodies.rectangle(200,350,400,50,stop);
    ball = Bodies.circle(100,200,30,bounce);
    World.add(world,box);
    World.add(world,ground);
    World.add(world,ball);
    console.log(box);
}

function draw(){
    background(0);

    Engine.update(engine);
    rectMode(CENTER);
    fill("Red");
    rect(box.position.x,box.position.y,100,50);
    fill("brown");
    rect(ground.position.x,ground.position.y,400,50);
    ellipseMode(CENTER);
    fill("Green");
    ellipse(ball.position.x,ball.position.y,50,50);
    
}