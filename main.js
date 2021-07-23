
difference=0;
leftWristX=0;
rightWristX=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400);

    canvas = createCanvas(400, 400);
    canvas.position(500, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' ,gotPoses);
}

function draw(){
    background('#12e34d');

    document.getElementById("square_sides").innerHTML = "Width And Height of the Text will be = " + difference +"px";
    textSize(difference);
    fill('#e31e1e');
    text('Peter',50 ,400);
    
}

function modelLoaded(){
    console.log('PoseNet Is Initialized !!');
}

function gotPoses(results){
    if (results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +"noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX + "difference = " + difference);
    } 
}