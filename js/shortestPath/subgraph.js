function createGraph() {
    const graph = {};

    for (let x = 0; x < tileCount; x++) {
        for (let y = 0; y < tileCount; y++) {
            let key = `${x}-${y}`;

            if (!walls.positions.some(pos => pos.x === x && pos.y === y)) {
                graph[key] = [];

                if (x > 0) graph[key].push(`${x - 1}-${y}`);
                if (x < tileCount - 1) graph[key].push(`${x + 1}-${y}`);
                if (y > 0) graph[key].push(`${x}-${y - 1}`);
                if (y < tileCount - 1) graph[key].push(`${x}-${y + 1}`);
            }
        }
    }

    return graph;
}

function bfs(graph, start, end) {
    const queue = [[start]];
    const visited = new Set();

    while (queue.length > 0) {
        const path = queue.shift();
        const node = path[path.length - 1];

        if (!visited.has(node)) {
            const neighbors = graph[node] || [];

            for (const neighbor of neighbors) {
                const newPath = [...path, neighbor];
                queue.push(newPath);

                if (neighbor === end) {
                    return newPath;
                }
            }

            visited.add(node);
        }
    }

    return null; 
}
