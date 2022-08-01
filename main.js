function preload(){
    world_start=loadSound("world_start.wav");
    setSprites();
    MarioAnimation();
    mario_gameover=loadSound("gameover.wav");
    mario_jump=loadSound("jump.wav");
    mario_coin=loadSound("coin.wav");
    mario_kick=loadSound("kick.wav");
    mario_die=loadSound("mariodie.wav");
}
function setup(){
    canvas=createCanvas(1240, 336);
    canvas.parent('canvas');
    instializeInSetup(mario);
    video = createCapture(VIDEO);
    video.size(800, 400);
    video.parent('game_console');
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}
function modelLoaded(){
    console.log('modelo cargado');
}
function draw(){
    game();
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
    }
}