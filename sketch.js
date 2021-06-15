var database;
var balloonImage1,balloonImage2,balloon;
function preload() {
bg=loadImage("Hot Air Ballon-01.png")
balloonImage1=loadAnimation("Hot Air Ballon-04.png")
balloonImage2=loadImage("Hot Air Ballon-03.png","Hot Air Ballon-02.png")

}






function setup() {
  database=firebase.database()
  createCanvas(1500,600);
  balloon=createSprite(250,400, 50, 50);
  balloon.addAnimation("airballoon",balloonImage1)
  var balloonHeight=database.ref('balloon/height')
  balloonHeight.on("value",readHeight,showerror)

}



function draw() {
  background(bg); 
  if (keyDown(UP_ARROW)) {
    updateHeight(0,-10)
    balloon.addAnimation("airballoon2",balloonImage2)
  }
  if (keyDown(DOWN_ARROW)) {
    updateHeight(0,+10)
  }
  if (keyDown(LEFT_ARROW)) {
    updateHeight(-10,0)
    balloon.addAnimation("airballoon2",balloonImage2)
  }
  if (keyDown(RIGHT_ARROW)) {
    updateHeight(+10,0)
    balloon.addAnimation("airballoon2",balloonImage2)
  }
  drawSprites();
}
function readHeight(data){
  height=data.val()
  balloon.x=height.x
  balloon.y=height.y
}
function updateHeight(x,y){
  database.ref('balloon/height').set({
'x':height.x+x,
'y':height.y+y
  })
  
}
function showerror(){
  console.log("error")
}







