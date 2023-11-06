
const block={
    headX:10, 
    headY:10, 
    color:"red",
    path: [], 
    drawPath() {
        ctx.fillStyle = 'lightblue'; 
        this.path.forEach(p => {
            let [x, y] = p.split('-').map(Number);
            ctx.fillRect(x * tileCount, y * tileCount, tileSize, tileSize);
        });
    },
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
        walls.positions.forEach(e=>{
           
            if(e.x == this.headX && e.y==this.headY){
             
                xVelocity=0; 
                yVelocity=0;
                if(left){    
                    this.headX+=1;

                }else if(right){
                    this.headX-=1;
                    
                }else if(up){
                    this.headY+=1;

                }else if(down){

                    this.headY-=1;

                }
       
            }
        });

    },
    changePostion(){
        this.headX+= xVelocity;
        this.headY+= yVelocity; 
    }
};




