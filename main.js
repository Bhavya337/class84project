canvas=document.getElementById("my_canvas");
Ctx=canvas.getContext("2d");



car1_width=100;
car1_height=90;

car2_width=100;
car2_height=90;

baground_img="racing.jpg";
car1_img="car1.png";
car2_img="car1.png";



car1_x=10;
car1_y=10;

car2_x=10;
car2_y=10;

function add(){
    baground_img_Tag=new Image();
    baground_img_Tag.onload=uploadbaground;
  baground_img_Tag.src=baground_img;
  
    car1_img_Tag=new Image();
  car1_img_Tag.onload=uploadcar1;
 car1_img_Tag.src=car1_img;



 car2_img_Tag=new Image();
 car2_img_Tag.onload=uploadcar2;
car2_img_Tag.src=car2_img;


}

function uploadbaground() {
    Ctx.drawImage(baground_img_Tag,0,0,canvas.width,canvas.height);}
    
    
    
    function uploadcar1() {
        Ctx.drawImage(car1_img_Tag,car1_x,car1_y,car1_width,car1_height);}

          
    function uploadcar2() {
        Ctx.drawImage(car2_img_Tag,car2_x,car2_y,car2_width,car2_height);}

        
        window.addEventListener("keydown",My_key_down);
        function My_key_down(e){

var keypreesed=e.keyCode;
console.log(keypreesed);

if(keypreesed=='38')
{ up();

    console.log("up");


}



if(keypreesed=='40')
{ down();

    console.log("down");

}



if(keypreesed=='37')
{ left();

    console.log("left");

}



if(keypreesed=='39')
{ right();

    console.log("right");

}



        }







        window.addEventListener("keydown",My_key_down);
        function My_key_down(b){

var keypreesed=b.keyCode;
console.log(keypreesed);

if(keypreesed=='87')
{ up();

    console.log("up");


}



if(keypreesed=='83')
{ down();

    console.log("down");

}



if(keypreesed=='65')
{ left();

    console.log("left");

}



if(keypreesed=='68')
{ right();

    console.log("right");

}



        }



