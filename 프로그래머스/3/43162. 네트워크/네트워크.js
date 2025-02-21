function solution(n, computers) {
    var answer = 0;
    let visited = Array(n+1).fill(false);
    
    const graph = makeGraph(computers,n)
    
    function dfs(node){
        visited[node] = true
        for(let next of graph[node]){
            if(!visited[next]){
                visited[next] = true
                dfs(next)
            }
            
        }
    }
    
    for(let i = 1; i<=n; i++){
        if(visited[i]) continue
        dfs(i)
        answer+=1;
    }
    
    return answer;
}

function makeGraph(computers,n){
    let graph = Array(n+1).fill().map(()=>[]);
    for(let i = 0; i<computers.length; i++){
      for(let j = 0; j<n; j++){
          if(i===j) continue
          else if(computers[i][j] === 1) graph[i+1].push(j+1)
      }
    }
    
    return graph
}