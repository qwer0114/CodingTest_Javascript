function solution(arr) {
    var answer = [];
    let zero = 0;
    let one = 0;
    let n = arr.length;
    
    function dfs(x,y,half){
       
        
        if(isAllSame(x,y,half)){
            if(arr[x][y] ===1) one++;
            else zero ++;
            return
        }
        
        half = half/2
        dfs(x,y,half)
        dfs(x,y+half,half)
        dfs(x+half,y,half)
        dfs(x+half,y+half,half)
    }
    dfs(0,0,n)
    
    function isAllSame(x,y,half){
        let firstValue = arr[x][y];
        for(let i = x; i<x+half; i++){
            for(let j = y; j<y+half; j++){
                if(arr[i][j]!==firstValue) return false
            }
        }
       
        return true
}
    answer = [zero,one]
    return answer;
}

