

var canvas =new fabric.Canvas('myCanvas');

block_image_width=30;
block_image_height=30;

player_x = 10;
player_y = 10;

var player_object ="";

function player_update() {
    fabric.Image.fromURL("player.png",
    function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
               });
               canvas.add(player_object);
    });
}

function new_image(get_image) {
fabric.Image.fromURL(get_image,
    function(Img){
block_image_object=Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
    top:player_y,left:player_x
       });
       canvas.add(block_image_object);
});

}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed=='80') {
    console.log("p and Shift pressed together");
    block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey && keyPressed=='77') {
        console.log("m and Shift pressed together");
        block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
    if (keyPressed == '70') {
        new_image("ironman_face.png");
        console.log("f");
    }
    if (keyPressed == '65') {
        new_image("ironman_body.png");
        console.log("A");
    }
    if ( keyPressed == '67') {
        new_image("ironman_legs.png");
        console.log("C");
    }
    if (keyPressed == '68') {
        new_image("ironman_right_hand.png");
        console.log("D");
    }
    if (keyPressed == '69') {
        new_image("ironman_left_hand.png");
        console.log("E");
    }
    

    if (keyPressed == '71') {
        new_image("spiderman_face.png");
        console.log("G");
    }
    if (keyPressed == '66') {
        new_image("spiderman_body.png");
        console.log("b");
    }
    if (keyPressed == '73') {
        new_image("spiderman_legs.png");
        console.log("I");
    }
    if (keyPressed == '74') {
        new_image("spiderman_left_hand.png");
        console.log("J");
    }
    if (keyPressed == '75') {
        new_image("spiderman_right_hand.png");
        console.log("K");
    }
    if (keyPressed == '78') {
        new_image("hulk_face.png");
        console.log("N");
    }
    if (keyPressed == '79') {
        new_image("hulkd_body.png");
        console.log("O");
    }
    if (keyPressed == '81') {
        new_image("hulk_left_hand.png");
        console.log("Q");
    }
    if (keyPressed == '83') {
        new_image("hulk_right_hand.png");
        console.log("S");
    }
    if (keyPressed == '76') {
        new_image("hulk_legs.png");
        console.log("l");
    }
    if (keyPressed == '84') {
        new_image("thor_face.png");
        console.log("T");
    }
    if (keyPressed == '85') {
        new_image("thor_left_hand.png");
        console.log("U");
    }
    if (keyPressed == '82') {
        new_image("thor_right_hand.png");
        console.log("r");
    }
    if (keyPressed == '72') {
        new_image("captain_america_left_hand.png");
        console.log("h");
    }
   
}

function up() {
if (player_y >=0) {
    player_y=player_y-block_image_height;
    console.log("Block Image height = " + block_image_height);
    console.log("When the Up Arrow key is pressed X = " + player_x + "& Y = " + player_y);
    canvas.remove(player_object);
    player_update();
    
}
}

function down() {
    if (player_y <=500) {
        player_y=player_y+block_image_height;
        console.log("Block Image height = " + block_image_height);
        console.log("When the Down Arrow key is pressed X = " + player_x + "& Y = " + player_y);
        canvas.remove(player_object);
        player_update();
        
    }
    }

    function left() {
        if (player_x >=0) {
            player_x=player_x-block_image_width;
            console.log("Block Image Width = " + block_image_width);
            console.log("When the Left Arrow key is pressed X = " + player_x + "& Y = " + player_y);
            canvas.remove(player_object);
            player_update();
            
        }
        }

        function right() {
            if (player_x <=800) {
                player_x=player_x+block_image_width;
                console.log("Block Image Width = " + block_image_width);
                console.log("When the Right Arrow key is pressed X = " + player_x + "& Y = " + player_y);
                canvas.remove(player_object);
                player_update();
                
            }
            }