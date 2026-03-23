function solution(n, edge) {
    var answer = 0;
    const graph = Array(n+1).fill().map(()=>[]);
    let queue = [[1,0]];
    let visited = Array(n+1).fill(false)
    visited[1] = true;
    let array = [];
    
    for(let [a,b] of edge){
        graph[a].push(b);
        graph[b].push(a);
    }
    
    while(queue.length>0){
        let [node,ctn] = queue.shift();
        array[node] = ctn;
        
        for(let nextNode of graph[node]){
            if(!visited[nextNode]){
                 visited[nextNode] = true
                 queue.push([nextNode,ctn+1])
            }
           
        }
        
    }
 
    let max = Math.max(...array.filter((a)=>a))
    
    for(let a of array){
        if(a === max) answer++
    }
    
   
    
    
    return answer;
}