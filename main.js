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
background("#73FDC5")
}

function modelloaded(){
    console.log("model loaded");
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);
    }
}



