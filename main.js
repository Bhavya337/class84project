canvas=document.getElementById("my_canvas");
Ctx=canvas.getContext("2d");



car1_width=100;
car1_height=90;

car2_width=100;
car2_height=90;

baground_img="racing.jpg";
car1_img="car1.png";
car2_img="car2.jpg";



car1_x=10;
car1_y=10;

car2_x=10;
car2_y=100;

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

var keypressed=e.keyCode;
console.log(keypressed);
if(car1_x >700)
{
    console.log("car 1 won");
    document.getElementById("game_status").innerHTML="Car1 won!!";


}

if(car2_x >700)
{
    console.log("car 2 won");
    document.getElementById("game_status").innerHTML="Car2 won!!";
    

}

if(keypressed=='38')
{car1_up();

    console.log("up");


}



if(keypressed=='40')
{car1_down();

    console.log("down");

}



if(keypressed=='37')
{ car1_left();

    console.log("left");

}



if(keypressed=='39')
{ car1_right();

    console.log("right");

}



        


if(keypressed=='87')
{car2_up();

    console.log("up2");


}



if(keypressed=='83')
{car2_down();

    console.log("down2");

}



if(keypressed=='65')
{ car2_left();

    console.log("left2");

}



if(keypressed=='68')
{car2_right();

    console.log("right2");

}

        }

    


function car1_up(){
    if (car1_y>=0)
    {
       car1_y=car1_y-10;
       uploadbaground();
        uploadcar1();
        uploadcar2();
        console.log("When up arrow is pressed, x = " +car1_x + " | y = " +car1_y);
    }
}


function car1_down(){
    if (car1_y<=460)
    {
        car1_y=car1_y+10;
        uploadbaground();
        uploadcar1();
        uploadcar2();
        console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    }
}

function car1_left(){
    if (car1_x>=0)
    {
        car1_x=car1_x-10;
        uploadbaground();
        uploadcar1();
        uploadcar2();
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    }
}

function car1_right(){
    if (car1_x<=700)
    {
        car1_x=car1_x+10;
        uploadbaground();
        uploadcar1();
        uploadcar2();
        console.log("When right arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    }
}


function car2_up(){
    if (car2_y>=0)
    {
       car2_y=car2_y-10;
       uploadbaground();
        uploadcar1();
        uploadcar2();
        console.log("When up arrow is pressed, x = " +car2_x + " | y = " +car2_y);
    }
}


function car2_down(){
    if (car2_y<=460)
    {
        car2_y=car2_y+10;
        uploadbaground();
        uploadcar1();
        uploadcar2();
        console.log("When down arrow is pressed, x = " + car2_x + " | y = " +car2_y);
    }
}

function car2_left(){
    if (car2_x>=0)
    {
        car2_x=car2_x-10;
        uploadbaground();
        uploadcar1();
        uploadcar2();
        console.log("When left arrow is pressed, x = " + car2_x + " | y = " +car2_y);
    }
}

function car2_right(){
    if (car2_x<=700)
    {
        car2_x=car2_x+10;
        uploadbaground();
        uploadcar1();
        uploadcar2();
        console.log("When right arrow is pressed, x = " + car2_x + " | y = " +car2_y);
    }
}


        
