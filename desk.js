status1 = "";
objectDetector = "";
img = "";
function preload(){
   img = loadImage("IMG-3025.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model loaded");
   status1 = true;
   objectDetector.detect(img, gotResult);

}

function gotResult(error, results){
    if (error){
        console.log(error);

    }
    console.log(results);
}