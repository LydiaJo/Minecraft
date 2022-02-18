var canvas=new fabric.Canvas('myCanvas');
playerX=10;
playerY=10;
block_image_Width=30;
block_image_Height=30
var playerObjects="";
var block_image_Objects="";
function player_Update(){
  console.log ("inside_player_Update")
fabric.Image.fromURL("player.png", function(Img){
    playerObjects=Img;
playerObjects.scaleToWidth(150);
playerObjects.scaleToHeight(140);
playerObjects.set({
    top:playerY,
    left:playerX
    
})
canvas.add(playerObjects)
});
}

function new_image(get_image){
  fabric.Image.fromURL(get_image, function(Img){
      playerObjects=Img;
  block_image_Objects.scaleToWidth(block_image_Width);
  block_image_Objects.scaleToHeight(block_image_Height);
  block_image_Objects.set({
      top:playerY,
      left:playerX
      
  })
  canvas.add(block_image_Objects)
  });
  }
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
keypressed=e.keyCode;
console.log (keypressed);
if (e.shiftKey==true&& keypressed=='80'){
    console.log ("p and shiftkey are being pressed together");
    block_image_Width+=10;
    block_image_Height+=10;
    document.getElementById("current_height").innerHTML=block_image_Height;
    document.getElementById("current_width").innerHTML=block_image_Width;
}
if (e.shiftKey==true&& keypressed=='77'){
    console.log ("m and shiftkey are being pressed together");
    block_image_Width-=10;
    block_image_Height-=10;
    document.getElementById("current_height").innerHTML=block_image_Height;
    document.getElementById("current_width").innerHTML=block_image_Width;
}
if (keypressed=="37"){
    console.log ("left key has been pressed");
    //left();

}

if (keypressed=="39"){
    console.log ("right key has been pressed");
    //right();

}

if (keypressed=="38"){
    console.log ("up key has been pressed");
    //up();

}

if (keypressed=="40"){
    console.log ("down key has been pressed");
    //down();

}

if (keypressed=="87"){
    console.log ("w key pressed");
  // new_image('wall.jpg')

}
if (keypressed=="76"){
    console.log ("l key pressed");
  // new_image('light_green.png')

}
if (keypressed=="71"){
    console.log ("g key pressed");
  // new_image('ground.png')

}
if (keypressed=="82"){
    console.log ("r key pressed");
  // new_image('roof.jpg')

}

if (keypressed=="84"){
    console.log ("t key pressed");
  // new_image('trunk.jpg')

}
if (keypressed=="85"){
    console.log ("u key pressed");
  // new_image('unique.png')

}
if (keypressed=="89"){
    console.log ("y key pressed");
  // new_image('yellow_wall.png')

}
if (keypressed=="67"){
    console.log ("c key pressed");
  // new_image('cloud.jpg')

}
if (keypressed=="68"){
    console.log ("d key pressed");
  // new_image('dark_green.png')

}
}
function up(){
  if (playerY>=10){
    playerY=playerY-block_image_Height;
    console.log ("up key is pressed, X="+playerX+" Y="+playerY);
    console.log (block_image_Height);
    canvas.remove (playerObjects);
    player_Update();
  }
}


function down(){
  if (playerY<=500){
    playerY=playerY+block_image_Height;
    console.log ("down boiiiiii key is pressed, X="+playerX+" Y="+playerY);
    console.log (block_image_Height);
    canvas.remove (playerObjects);
    player_Update();
  }
}


function left(){
  if (playerX>=10){
    playerX=playerX-block_image_Width;
    console.log ("Left key is pressed, X="+playerX+" Y="+playerY);
    console.log (block_image_Height);
    canvas.remove (playerObjects);
    player_Update();
  }
}


function right(){
  if (playerX<=800){
    playerX=playerX+block_image_Width;
    console.log ("Right key is pressed, X="+playerX+" Y="+playerY);
    console.log (block_image_Height);
    canvas.remove (playerObjects);
    player_Update();
  }
}


