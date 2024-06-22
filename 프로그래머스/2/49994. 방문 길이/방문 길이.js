function solution(dirs) {
    var answer = 0;
    let start = [0, 0];
    let visitedPaths = new Set();
    
    for (let i = 0; i < dirs.length; i++) {
        let [x, y] = start;
        let nextX = x, nextY = y;
        
        if (dirs[i] === "U" && y < 5) nextY++;
        else if (dirs[i] === "D" && y > -5) nextY--;
        else if (dirs[i] === "L" && x > -5) nextX--;
        else if (dirs[i] === "R" && x < 5) nextX++;
        else continue;
        
        let path = `${x},${y},${nextX},${nextY}`;
        let reversePath = `${nextX},${nextY},${x},${y}`;
        
        visitedPaths.add(path);
        visitedPaths.add(reversePath);
        
        start = [nextX, nextY];
    }
    
    return visitedPaths.size / 2;
}