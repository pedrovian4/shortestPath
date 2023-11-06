
let isFindingPath = false;

document.getElementById("findPathBtn").addEventListener("click", async function() {
    if (isFindingPath) return;
    
    isFindingPath = true;
    let graph = createGraph();
    let start = `${block.headX}-${block.headY}`;
    let end = `${exit.xExit}-${exit.yExit}`;
    let shortestPath = bfs(graph, start, end);

    for (let i = 1; i < shortestPath.length; i++) {
        let [prevX, prevY] = shortestPath[i - 1].split('-').map(Number);
        let [curX, curY] = shortestPath[i].split('-').map(Number);
        
        xVelocity = curX - prevX;
        yVelocity = curY - prevY;

        await new Promise(resolve => setTimeout(resolve, 1000 / speed));
    }
    xVelocity = 0;
    yVelocity = 0;
    isFindingPath = false;
});

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

