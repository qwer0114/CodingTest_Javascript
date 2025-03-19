function findIndex(board){
    let startIndex = [];
    let targetIndex = [];
    for(let i = 0; i<board.length; i++){
        for(let j = 0; j<board[i].length; j++){
            if(board[i][j]==="R") startIndex = [i,j]
            else if(board[i][j]==="G") targetIndex = [i,j]
        }
    }
    
    return {startIndex,targetIndex}
}

function solution(board) {
    var answer = 0;
    let direction = [[-1,0],[1,0],[0,-1],[0,1]]
    let {startIndex,targetIndex} = findIndex(board);
    let xLength = board.length;
    let yLength = board[0].length;
    let visited = Array(xLength).fill().map(()=>Array(yLength).fill(false))
    let queue = [[...startIndex,0]];
    visited[startIndex[0]][startIndex[1]] = true;
    
    
    while(queue.length>0){
        let [currentX,currentY,count] = queue.shift();
        
        if(currentX === targetIndex[0] && currentY === targetIndex[1]){
            return count
        }
        for(let [dx,dy] of direction){
            let nx = currentX+dx;
            let ny = currentY+dy;
            let flag = true;
            
            if(nx>=0 && nx<xLength && ny>=0 && ny<yLength && board[nx][ny]!=="D"){
               while(flag){
               nx += dx;
               ny += dy;
               if(nx<0 || nx>=xLength || ny<0 || ny>=yLength || board[nx][ny]==="D"){
                   nx -= dx;
                   ny -= dy;
                   flag = false
               }
            }   
                if(!visited[nx][ny]){
                     visited[nx][ny] = true;
                     queue.push([nx,ny,count+1])
                }
               
            }
        }
    }
    return -1;
}