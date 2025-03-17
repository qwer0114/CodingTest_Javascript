

function solution(maps) {
    var answer = [];
    let direction = [[-1,0],[1,0],[0,-1],[0,1]]
    maps = maps.map((row)=>row.split(""))
    let lengthX = maps.length;
    let lengthY = maps[0].length
    let visited = Array(lengthX).fill().map(()=>Array(lengthY).fill(false))
    
    function dfs(x,y){
        let sum = Number(maps[x][y])
        for(let [dx,dy] of direction){
            let nx = x+dx;
            let ny = y+dy;
            if(nx>=0 && nx<lengthX && ny>=0 && ny<lengthY && maps[nx][ny]!=="X"&& !visited[nx][ny]){
               visited[nx][ny] = true
               sum+= dfs(nx,ny)
            }
        }
        return sum
    }
    
    
    for(let i = 0; i<lengthX; i++){
        for(let j = 0; j<lengthY; j++){
            if(maps[i][j]!=="X" && !visited[i][j]){
                visited[i][j] = true
                answer.push(dfs(i,j))
            }
        }
    }

    
     return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}