var bgImg,bg,Rside,Lside,Bside,endImg,end1,end2,endImg2;
var man,manImg,virus,virusImg,virusG;
var PLAY=1;
var END=0;
var gameState=1;


function preload(){

bgImg = loadImage("road2.png");
manImg = loadAnimation("Runner-1.png","Runner-2.png");
virusImg = loadImage("virus.jfif");
endImg = loadImage("stay safe.png");


 

}

function setup() {
  createCanvas(800,400);
  
  bg = createSprite(700,200,50,50);
  bg.addImage(bgImg);
  bg.scale=6.5;
  bg.velocityX=5;

  Rside  =createSprite(400,15,800,20);
  Rside.visible=false;
  Lside  =createSprite(400,385,800,20);
  Lside.visible=false;
  Bside  = createSprite(10,200,20,400);
  Bside.visible=false;


  man = createSprite(150,200,50,50);
  man.addAnimation("running",manImg);
  man.scale=0.10;
  man.debug=false;
  man.setCollider("rectangle",0,0,40,40);

  end1 = createSprite(200,300,200,200);
  end1.addImage(endImg);
  end1.frameDealy=2500;

  


  virusG = createGroup();
}

function draw() {
  background("black");
  
  if(gameState===PLAY){


    if(bg.x > 150){

     bg.x=bg.x/2; 

    }

    man.y=mouseY;
    man.x=mouseX;
    man.collide(Rside);
    man.collide(Lside);
    man.collide(Bside);
    covid();
    end1.visible=false;

    if(virusG.isTouching(man) || man.isTouching(virusG)){

    gameState=END;
    man.visible=false;
    


    }
  }

     if(gameState===END){

      bg.visible=false;
      virusG.destroyEach();
       fill("yellow");
       textSize(40);
      text("DO NOT GO OUT",200,100);
      text("STAY SAFE AND ENJOY THE GAME",50,150);
      text("WEAR MASK",400,300);
      end1.visible=true;
   
     }
  


  drawSprites();
}

//for creating virus
function covid(){

 if(frameCount %70===0){
   
  virus=createSprite(400,200,30,30);
  virus.y  =Math.round(random(50,350));
  virus.x  =Math.round(random(100,750));
  virus.frameDealy=25;
  virus.lifetime=350;
  virus.velocityX=4;
  virus.addImage(virusImg);
  virus.scale=0.3;
  virusG.add(virus);
 }


}