function findSpecificPoints(maps) {
    let start = null;
    let lever = null;
    let end = null;
    for(let i = 0; i < maps.length; i++) {
        for(let j = 0; j < maps[i].length; j++) {
            if(maps[i][j] === "S") start = [i, j];
            if(maps[i][j] === "L") lever = [i, j];
            if(maps[i][j] === "E") end = [i, j];
        }
    }
    
    return { start, lever, end };
}

function findShortestPath(maps,start,target){
    let xlimit = maps.length;
    let ylimit = maps[0].length;
    let directions = [[-1,0],[0,1],[1,0],[0,-1]]
    
    const visited = Array(xlimit).fill().map(() => Array(ylimit).fill(false));
    visited[start[0]][start[1]] = true;
    
    let queue = [[...start,0]] 
    
    while(queue.length>0){
        let [x,y,count] = queue.shift();
        
        if(x === target[0] && y === target[1]) {
            return count;
        }
        
        for(let [dx,dy] of directions){
            let nx = x+dx;
            let ny = y+dy;
            
             if(nx>=0 && nx<xlimit && ny>=0 && ny<ylimit && maps[nx][ny]!=="X" && !visited[nx][ny]){
               visited[nx][ny] = true
               queue.push([nx,ny,count+1])
           } 
        }
    }
    return -1
}

function solution(maps) {
    maps = maps.map((string)=>string.split(""))
    let {start,lever,end} = findSpecificPoints(maps)
    
    const startToLever = findShortestPath(maps, start, lever);
    const leverToEnd = findShortestPath(maps,lever,end)
    
     if(startToLever === -1 || leverToEnd === -1) {
        return -1;
    }
    
    return startToLever + leverToEnd
}