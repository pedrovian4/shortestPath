
const walls={
    positions:[], 
    color:"brown"
    ,positionsRandom(){
        for(let i = 0; i<20; i++){
        
            let number = Math.floor(Math.random()*20);
            let k = i%20;
            
            while((number == block.headX && k == block.headY) ||(k == exit.yExit && number == exit.xExit)){
                k++;
                number++;

            }
            
            this.positions.push({x:number,y:k%20});
            
        }
    }, 
    draw(){
        for (position of this.positions) {
            ctx.fillStyle=this.color
            ctx.fillRect(position.x*tileCount,position.y*tileCount, tileSize, tileSize);
        }

    }
}

