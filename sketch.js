var sprite, sprite_running, edges;
var groundImage;
var PLAY = 1
var END = 0
var gameState = PLAY

function preload() {
  dodo= loadImage("dodo.png");
  // groundImage = loadImage("chao.png")
  arvoreImg = loadImage("arvore.png")
  pedraImg = loadImage("pedra.png")
  bgImg = loadImage("bgg.png")
}

function setup() {
  createCanvas(600, 200);

  //criando o sprite e adicionando animacao
  bg = createSprite(300, 100, 600, 20)
  bg.addImage(bgImg)
  bg.scale=0.2

  sprite = createSprite(50, 110, 20, 50);
  sprite.addImage(dodo);

  edges = createEdgeSprites();
 
  invisibleGround = createSprite(200, 200, 400, 10)
  invisibleGround.visible = false
  //adicione dimensão e posição 
  sprite.scale = 0.2;
  sprite.x = 50
}


function draw() {
  //definir a cor do plano de fundo 
  background("white");
    // image(bgImg,0,0)
  if (gameState === PLAY) {
    bg.velocityX = -7
    //pular quando tecla de espaço for pressionada
    if (keyDown("space") && sprite.y >= 100) {
      sprite.velocityY = -10;
    }
    //gravidade 
    sprite.velocityY = sprite.velocityY + 0.5;

    if (bg.x < 0) {
      bg.x = bg.width /10
    }
    gerarPedra()
    gerarArvore()
  }
  else if(gameState ===END){

  }

  //impedir que o sprite caia
  sprite.collide(invisibleGround)
  
  drawSprites();
}


function gerarArvore(){
  if(frameCount % 160 === 0){
    var arvore = createSprite(600,140,10,60)
    arvore.addImage(arvoreImg)
    arvore.velocityX=-7
    arvore.scale=0.3
  }
}

function gerarPedra(){
  if(frameCount % 80 === 0){
    var pedra = createSprite(600,180,10,60)
    pedra.addImage(pedraImg)
    pedra.velocityX=-7
    pedra.scale=0.09
  }
}