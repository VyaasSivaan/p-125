
rightWristX=0;
leftWristX=0;
difference=0;

function setup() {
canvas=createCanvas(400,400);
canvas.position(850,100);
video=createCapture(VIDEO);
video.size(400,400);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}
function modelLoaded() {
console.log('poseNet is initialized');
}
function gotPoses(results) {
if(results.length>0) {
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
}


} 
function draw() {
background('#50F0C7');
document.getElementById("font_size").innerHTML="font size of the text will be ="+difference+"px";
textSize(difference);
fill('#3497A0');
text('Vyaas',50,350);
}