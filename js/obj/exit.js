
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
            walls.positions.forEach(e=>{
           
                while (e.x == this.xExit && e.y==this.yExit){
                    

                    this.xExit = Math.floor(Math.random()* 20);
                    this.yExit = Math.floor(Math.random()* 20);
                }
            });
        }
    }
}