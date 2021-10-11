const Engine = Matter.Engine;
const World = Matter.World;
const Bodies  =Matter.Bodies;

var engine,world;
var drops = [];
var umbrella;
var maxDrops = 100;
var rand;
var Thunder, thunbolt1, thunbolt2,thunbolt3,thunbolt4;
var thunderCreatedFrame = 0;
//var createDrop;

function preload(){

thunbolt1 = loadImage('images/thunderbolt/1.png');
thunbolt2 = loadImage('images/thunderbolt/2.png');
thunbolt3 = loadImage('images/thunderbolt/3.png');
thunbolt4 = loadImage('images/thunderbolt/4.png');

    
}

function setup(){

    createCanvas(500,700);

    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,500);

    for(var i = 0; i < maxDrops ; i++){

        drops.push(new Drops(random(0,500), random(0,500)));
        
    }
   
    
}

function draw(){

   Engine.update(engine);
   background(0,0,0); 


   rand = Math.round(random(1,4));
   if(frameCount%80 === 0){

    thunderCreatedFrame = frameCount;
    Thunder = createSprite(random(10,370), random(10,30), 10,10);
    switch(rand){

        case 1 : Thunder.addImage(thunbolt1);
        break;
        case 2: Thunder.addImage(thunbolt2);
        break;
        case 3: Thunder.addImage(thunbolt3);
        break;
        case 4: Thunder.addImage(thunbolt4);
        break;
        default:break;
    }
    Thunder.scale = 0.7;
   }

  if(thunderCreatedFrame+10=== frameCount && Thunder){

    Thunder.destroy();
  }

  umbrella.display();

  for(var i = 0; i<maxDrops; i++){

    drops[i].update();
    drops[i].display();
  }

   drawSprites(); 
}   


