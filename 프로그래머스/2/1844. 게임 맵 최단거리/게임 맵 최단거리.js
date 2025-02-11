function solution(maps) {
    var answer = 0;
    let directions = [[1,0],[0,1],[-1,0],[0,-1]]
    let queue = [[0,0,1]];
    let [targetX,targetY] = [maps.length-1,maps[0].length-1];
    let visited = new Set(["0,0"])
    
    while(queue.length>0){
        let [currentX,currentY,walks] = queue.shift();
        if(currentX===targetX && currentY===targetY) return walks;
        
        for(let [dx,dy] of directions){
            const nextX = currentX+dx;
            const nextY = currentY+dy;
            const key = `${nextX},${nextY}`
            
            if(nextX >= 0 && nextX < maps.length && 
               nextY >= 0 && nextY < maps[0].length && 
               maps[nextX][nextY] === 1 && 
               !visited.has(key)) {
                visited.add(key);
                queue.push([nextX,nextY,walks+1]);
            }
        }
        
    }
    
    return -1
}