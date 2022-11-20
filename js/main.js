
walls.positionsRandom();



function game(){
    block.changePostion()
    block.wallColision();
    block.draw();
    walls.draw();
    exit.draw();
    exit.checkColision();
}

function gameloop(){
    clearScreen();
    dashboard();
    game();
    setTimeout(gameloop, 1000/speed);
}


gameloop();

