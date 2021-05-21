var block1, block2, block3, block4, ball, edges, music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    createCanvas(windowWidth, windowHeight);

    block1 = createSprite(windowWidth/7.5, windowHeight-50, windowWidth/4.2, 30);
    block1.shapeColor = "blue";

    block2 = createSprite(windowWidth/2.63, windowHeight-50, windowWidth/4.2, 30);
    block2.shapeColor = "orange";

    block3 = createSprite(windowWidth/1.6, windowHeight-50, windowWidth/4.2, 30);
    block3.shapeColor = "red";

    block4 = createSprite(windowWidth/1.15, windowHeight-50, windowWidth/4.2, 30);
    block4.shapeColor = "green";

    ball = createSprite(random(20, 750), 100, 40, 40);
    ball.shapeColor = rgb(255, 255, 255);
    ball.velocityX = -5;
    ball.velocityY = 5;
}

function draw() {
    background(rgb(169, 169, 169));

    edges = createEdgeSprites();
    ball.bounceOff(edges);
    
    if(block1.y - ball.y < block1.height/2 + ball.height/2
        && ball.y - block1.y < ball.height/2 + block1.height/2){
            ball.velocityY = ball.velocityY * (-1);
            ball.shapeColor = "blue";
            music.play();
    }

    if(block2.y - ball.y < block2.height/2 + ball.height/2
        && ball.y - block2.y < ball.height/2 + block2.height/2){
            ball.velocityY = 0;
            ball.velocityX = 0;
            ball.shapeColor = "orange";
            music.pause();
    }

    if(block3.y - ball.y < block3.height/2 + ball.height/2
        && ball.y - block3.y < ball.height/2 + block3.height/2){
            ball.velocityY = ball.velocityY * (-1);
            ball.shapeColor = "red";
    }

    if(block4.y - ball.y < block4.height/2 + ball.height/2
        && ball.y - block4.y < ball.height/2 + block4.height/2){
            ball.velocityY = ball.velocityY * (-1);
            ball.shapeColor = "orange";
    }

    drawSprites();
}