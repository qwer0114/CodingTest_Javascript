function solution(n, roads, sources, destination) {
    var answer = [];
    const graph = Array(n+1).fill().map(()=>[]);
    const dist = Array(n+1).fill(-1);
    
    for(let [a,b] of roads){
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const queue = [destination]
    dist[destination] = 0;
    let head = 0;
    
    while(head<queue.length){
        const x = queue[head++];
        
        for(let nx of graph[x]){
            if(dist[nx] === -1){
                dist[nx] = dist[x]+1;
                queue.push(nx)
            }
        }
    }
   
   return sources.map(s => dist[s]);
   
        
}
    
