
let isFindingPath = false;

document.getElementById("findPathBtn").addEventListener("click", findPath);

walls.positionsRandom();


function game(){
    block.drawPath();
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

