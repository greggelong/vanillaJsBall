// set up canvas and context

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height =window.innerHeight;
/* ------- drawing some shapes ------
// some setup for stroke and fill
ctx.fillStyle = 'red';
ctx.strokeStyle = 'blue';
ctx.lineWidth =5
// --------draw circle------

ctx.beginPath();
// arc(x,y,radius,start angle, finish angle ), angles in radials 
ctx.arc(300,300,100,0 ,Math.PI*2);
ctx.closePath();

// stroke and fill but be sure to set style
ctx.fill();
ctx.stroke();

// stroke has to come after rect. 
ctx.rect(canvas.width/2,canvas.height/2,100,100);
ctx.stroke();
ctx.fill();
// funny that stroke and fill are attributes that you add to an 
// already declared shape.  this is the opposite of p5
*/
//----------How to get an animation loop (like draw() in p5)----------------//
// it works on recursion 

let x = 100;
let y = canvas.height/2;
let r = 20;
let xSpeed = 5;
let ySpeed = 3;

function drawBall(){
    // --------draw circle------
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'blue';
    ctx.lineWidth =5;

    ctx.beginPath();
    // arc(x,y,radius,start angle, finish angle ), angles in radials 
    ctx.arc(x,y,r,0 ,Math.PI*2);
    ctx.closePath();
    // need to call stroke and or fill
    ctx.fill();
    ctx.stroke();

}

function animate(){
    //draw each frame

    // clear each frame
    ctx.clearRect(0,0, canvas.width,canvas.height);
    
    
    //check edges
    if(x+r > canvas.width || x-r < 0 ){
        xSpeed *=-1;
        console.log("bing")
    }
    if(y+r > canvas.height || y-r < 0 ){
        ySpeed *=-1;
        console.log("bong")

    }
    // increase x and y by speed

    x+= xSpeed;
    y+= ySpeed;

    //ySpeed-=0.1
    console.log(x,y, ySpeed)

    // draw the the ball

    drawBall();
    
    
    
    

    // loop it 
    requestAnimationFrame(animate);
}

animate();




