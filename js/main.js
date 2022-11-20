
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


gameloop();

