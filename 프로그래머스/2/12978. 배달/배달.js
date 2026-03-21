function solution(N, road, K) {
    var answer = 0;
    const graph = Array(N+1).fill().map(()=>[])
    let dist = Array(N+1).fill(Infinity);
    
    for(let [a,b,c] of road){
        graph[a].push([b,c])
        graph[b].push([a,c])
    }
    
     const queue = [[1,0]];
     dist[1] = 0;
    
    while(queue.length>0){
        let [node,time] = queue.shift();
        
        if(time<dist[node]) continue
        
        for(let [nextNode,takenTime] of graph[node]){
           const newTime = takenTime+time;
            if(newTime<dist[nextNode]){
                dist[nextNode] = newTime;
                queue.push([nextNode,newTime])
            }
        }
        
    }

    
    answer = dist.filter((d)=>d<=K).length

    return answer;
}