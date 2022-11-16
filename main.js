const canvas = document.getElementById("jogo"); 
const ctx = canvas.getContext("2d");


var speed = 7;
var tileCount = 20; 
var tileSize = canvas.width / tileCount - 2;
var headX= 10; 
var headY=10;

var xVelocity = 0;
var yVelocity = 0;


// COLOCAR  PESO NAS ARESTAS (TILES)

document.body.addEventListener('keydown', keyDown);


// Programação dinamica com Recursividade

const block={
    headX:10, 
    headY:10, 
    color:"red", 
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.headX * tileCount, this.headY*tileCount,tileSize, tileSize );
    }, 
    wallColision(){
        if(this.headX<0){
            this.headX=0;
        }
    
        if(this.headY<0){
            this.headY=0;
        }
    
        if(this.headY>19){
            this.headY=19;
        }
    
        if(this.headX>19){
            this.headX=19;
        }
        walls.positions.forEach(element => {
            if(element.x==this.headX && element.y==this.headY){
                xVelocity=0;
                yVelocity=0;

                // fazer algoritimo de confronto aqui
            }
        });
    },
    changePostion(){
        this.headX+= xVelocity;
        this.headY+= yVelocity; 
    }
};

const exit ={
    xExit:15, 
    yExit: 15,
    color:"yellow", 
    draw(){
        ctx.fillStyle=this.color;
        ctx.fillRect(this.xExit*tileCount, this.yExit * tileCount, tileSize, tileSize);
    }, checkColision(){
        if(this.xExit==block.headX && this.yExit == block.headY){
            this.xExit = Math.floor(Math.random()* 20);
            this.yExit = Math.floor(Math.random()* 20);
        }
    }
}






// TODO: CRIAR UM FACTORY DE MUROS
// TODO: CRIAR LÓGICA DE COLISÃO PARA OS MUROS CRIADOS


// TODO: IMPLEMENTAR MATRIZ DE ADJACÊNCIA IGNORANDO OS PONTOS QUE TEM MUROS, POIS ELES INDICAM DESCONEXÃO NOS  GRAFOS


const walls={
    positions:[], 
    color:"brown"
    ,positionsRandom(){
        for(let i = 0; i<100; i++){
        
            let number = Math.floor(Math.random()*20);
            
            if(number == block.headX || number == exit.xExit){
                number+=10;
            }

            if(i == block.headY || i == exit.yExit){
                i+=10;
            }
            
            this.positions.push({x:number,y:i%20});
            console.log(this.positions);
            
        }
    }, 
    draw(){
        for (position of this.positions) {
            ctx.fillStyle=this.color
            ctx.fillRect(position.x*tileCount,position.y*tileCount, tileSize, tileSize);
            console.log('ok');
        }

    }
}
walls.positionsRandom();


function gameloop(){
    clearScreen();
    block.changePostion()
    block.wallColision();
    dashboard();
    block.draw();
    walls.draw();
    exit.draw();
    exit.checkColision();
    setTimeout(gameloop, 1000/speed);
}


function clearScreen()
{
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, canvas.width, canvas.height );
}


function keyDown(event){
    running = true;
    //Apertou para cima
    if(event.keyCode ==38){
        yVelocity = -1;
        xVelocity = 0;
    }
    // apertou para baixo
    if(event.keyCode == 40){
        yVelocity = 1;
        xVelocity = 0;
    }


    // Apertou para a direita
    if(event.keyCode==39){
        yVelocity=0; 
        xVelocity=1;
    }
    // Apertou para a direita
    if(event.keyCode==37){
        yVelocity=0; 
        xVelocity= -1;
    }
 }


function dashboard(){
    document.querySelector('#x > span').textContent=block.headX;
    document.querySelector('#y > span').textContent=block.headY;
  }
  

gameloop();

