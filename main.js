leftWristX="";
rightWristX="";
fontSize="";


function preload(){

}


function setup(){
canvas= createCanvas(500,500);
canvas.position(800,160);
video=createCapture(VIDEO);
video.size(500,500);
video.position(200,160);


poseNet=ml5.poseNet(video,modelloaded);

poseNet.on("pose", gotResults);
}


function draw(){
background("#73FDC5");

textSize(fontSize);
fill("#00FFE");
text("Amit",50,400);
}

function modelloaded(){
    console.log("model loaded");
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        fontSize= leftWristX-rightWristX;
    }
}



