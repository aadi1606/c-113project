function preload(){

}

function setup(){
   canvas= createCanvas(500,400);
   canvas.position(400,250);
   video=createCapture(VIDEO);
   video.hide()


}
function draw(){
    image(video,80,70,350,250);
    
    fill(0,128,0);
    stroke(0,128,0);
    circle(50,40,70);
    circle(50,350,70);
    circle(450,350,70);
    circle(450,40,70);
    fill(255,0,0);
    stroke(255,0,0);
    rect(40,70,20,250);
    rect(440,70,20,250);
    rect(80,30,340,20);
    rect(80,340,340,20);
} 
function take_snapshot(){
    save("My image.png");
}