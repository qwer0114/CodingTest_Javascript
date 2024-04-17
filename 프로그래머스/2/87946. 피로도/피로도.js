function solution(k, dungeons) {
    let answer = [];
    const leastArr = [];
    const tiredArr = [];
     let visited = new Array(dungeons.length).fill(false);
    dungeons.forEach(d => {
        leastArr.push(d[0]);
        tiredArr.push(d[1]);
    });
    
    function DFS(L,k){
        answer.push(L)
        for(let i = 0; i<leastArr.length; i++){
            if(!visited[i] && k>=leastArr[i]){
                visited[i] = true;
                DFS(L+1,k-tiredArr[i])
                visited[i] = false;
            }
        }
      
        
    }
    DFS(0,k)

    return Math.max(...answer);
}
