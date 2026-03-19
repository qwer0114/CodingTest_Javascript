function solution(maps) {
    var answer = 0;
    let directions = [[1,0],[-1,0],[0,1],[0,-1]];
    let queue = [[0,0,1]]
    let [targetX,targetY] = [maps.length-1,maps[0].length-1];
    maps[0][0] = 1
    
    while(queue.length>0){
        let [x,y,walks] = queue.shift();
        if(x === targetX && y === targetY) return walks
        
        for(let [dx,dy] of directions){
            let nx = x+dx;
            let ny = y+dy;
            if(nx>=0 && nx<maps.length && ny>=0 && ny<maps[0].length && maps[nx][ny]===1){
                maps[nx][ny] = 0
                queue.push([nx,ny,walks+1])
            }
        }
    }
    
    
    return -1;
}