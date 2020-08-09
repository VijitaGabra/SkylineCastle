function setup() {
  createCanvas(1200,400);
  
  var build1 = createSprite(400, 300, 100, 200);
  var build2 = createSprite(510, 300, 100, 300);
  var build3 = createSprite(620, 300,100, 200);
  var build4 =  createSprite(730, 300, 100, 300);   
  var build5 = createSprite(840, 300, 100, 200);
  var lod1 = createSprite(300,300, 50, 450);
  var lod2 = createSprite(940, 300, 50, 450);
  var tri1 = createSprite(600,400,1000);
  
}

function draw() {
  background(255,192,203);  


  drawSprites();
}


