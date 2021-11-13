noseX="";
noseY="";
leftWristX="";
rightWristX="";
sizeOfSquare="";
lWOnScreen="";
rWOnScreen="";
scoreToBeOnScreen="0";

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
background("#06CDFF")

if(lWOnScreen > scoreToBeOnScreen && rWOnScreen > scoreToBeOnScreen){

    square(noseX-100,noseY-100,sizeOfSquare);
fill("#00FFFA");

}else{
    
    square(noseX-100,noseY-100,30);
    fill("#00FFFA");

}



}

function modelloaded(){
    console.log("model loaded");
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
      lWOnScreen=results[0].pose.keypoints[9].score;
      rWOnScreen=results[0].pose.keypoints[10].score;
    
        sizeOfSquare= floor(leftWristX - rightWristX);
        console.log(sizeOfSquare); 

        console.log(lWOnScreen,rWOnScreen);
       
        if(lWOnScreen > scoreToBeOnScreen && rWOnScreen > scoreToBeOnScreen){
            document.getElementById("size").innerHTML="The Width And Height Of The Square Is: " + sizeOfSquare + "px";
        
        }else{
            
            document.getElementById("size").innerHTML="The Width And Height Of The Square Is: 30px";
        
        }
       

    


}


}
