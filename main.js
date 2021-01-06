var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
var player_image="";
var block_image="";
block_image_width=30;
block_image_height=30;
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_image=Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_image);
    });
}
function block_update(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image=Img;
        block_image.scaleToWidth(block_image_width);
        block_image.scaleToHeight(block_image_height);
        block_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    if(keypressed=='37'){
        left()
        console.log("left");
    }
    if(keypressed=='39'){
        right()
        console.log("right");
    }
    if(keypressed=='38'){
        up()
        console.log("up");
    }
    if(keypressed=='40'){
        down()
        console.log("down");
    }
    if(e.shiftKey== true && keypressed=='80'){
        block_image_height=block_image_height+10;
        block_image_width=block_image_width+10;
        document.getElementById("width").innerHTML=block_image_width;
        document.getElementById("Height").innerHTML=block_image_height;
        console.log("Shift+p");
    }
    if(e.shiftKey== true && keypressed=='77'){
        block_image_height=block_image_height-10;
        block_image_width=block_image_width-10;
        document.getElementById("width").innerHTML=block_image_width;
        document.getElementById("Height").innerHTML=block_image_height;
        console.log("Shift+m");
    }
    if(keypressed=='67'){
        block_update("cloud.jpg");
        console.log("C pressed");
    }
    if(keypressed=='68'){
        block_update("dark_green.png");
        console.log("D pressed");
    }
    if(keypressed=='71'){
        block_update("ground.png");
        console.log("G pressed");
    }
    if(keypressed=='76'){
        block_update("light_green.png");
        console.log("L pressed");
    }
    if(keypressed=='82'){
        block_update("roof.jpg");
        console.log("R pressed");
    }
    if(keypressed=='84'){
        block_update("trunk.jpg");
        console.log("T pressed");
    }
    if(keypressed=='85'){
        block_update("unique.png");
        console.log("U pressed");
    }
    if(keypressed=='87'){
        block_update("wall.jpg");
        console.log("W pressed");
    }
    if(keypressed=='89'){
        block_update("yellow_wall.png");
        console.log("Y pressed");
    }
}
function up(){
    if (player_y>=0){
    player_y=player_y-block_image_height;
    console.log("Player x=" + player_x + "Y =" + player_y);
    canvas.remove(player_image);
    player_update();
    }
}
function left(){
    if (player_x>=0){
        player_x=player_x-block_image_width;
        console.log("Player x=" + player_x + "Y =" + player_y);
        canvas.remove(player_image);
        player_update();
    }
}
function right(){
    if (player_x<=850){
        player_x=player_x+block_image_width;
        console.log("Player x=" + player_x + "Y =" + player_y);
        canvas.remove(player_image);
        player_update();
    }
}
function down(){
    if (player_y<=500){
    player_y=player_y+block_image_height;
    console.log("Player x=" + player_x + "Y =" + player_y);
    canvas.remove(player_image);
    player_update();
    }
}