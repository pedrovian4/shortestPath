const canvas = document.getElementById("jogo"); 
const ctx = canvas.getContext("2d");


var speed = 7;
var tileCount = 20; 
var tileSize = canvas.width / tileCount - 2;
var headX= 10; 
var headY=10;

var xVelocity = 0;
var yVelocity = 0;
let left  =false;
let right =false; 
let up    =false; 
let down = false;



document.body.addEventListener('keydown', keyDown);




function clearScreen()
{
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, canvas.width, canvas.height );
}


function keyDown(event){
    //Apertou para cima
    if(event.keyCode ==38){
        console.log('Cima');
        turnTrue('up');
        yVelocity = -1;
        xVelocity = 0;

    }
    // apertou para baixo
    if(event.keyCode == 40){
        console.log('Baixo');
        turnTrue('down');
        yVelocity = 1;
        xVelocity = 0;

    }


    // Apertou para a direita
    if(event.keyCode==39){
        console.log('Direita');
        turnTrue('right');
        yVelocity=0; 
        xVelocity=1;

    }
    // Apertou para a esquerda
    if(event.keyCode==37){
        console.log('esquerda');
        turnTrue('left');
        yVelocity=0; 
        xVelocity= -1;
    }
 }


function dashboard(){
    document.querySelector('#x > span').textContent=block.headX;
    document.querySelector('#y > span').textContent=block.headY;
  }
  
  
function turnTrue(direction){
    
    switch(direction){
        case 'left':
            left = true;  
            right= false; 
            up = false; 
            down = false;
            break; 
        case 'right': 
            left = false;  
            right = true; 
            up = false; 
            down = false;
            break; 
        case 'up': 
            left = false;  
            right= false; 
            up =  true; 
            down = false;
            break;
        case 'down': 
            left = false;  
            right= false; 
            up =  false; 
            down = true;
            break;            
    }
}