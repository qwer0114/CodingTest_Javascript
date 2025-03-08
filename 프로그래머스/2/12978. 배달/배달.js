function solution(N, road, K) {
   
    const graph = Array(N + 1).fill().map(() => []);
    for (const [a, b, time] of road) {
        graph[a].push([b, time]);
        graph[b].push([a, time]);
    }
    
   
    const distances = Array(N + 1).fill(Infinity);
    distances[1] = 0; // 시작점(1번 마을)의 거리는 0
    
    
    const queue = [[1, 0]]; 
    
    while (queue.length > 0) {
    
        queue.sort((a, b) => a[1] - b[1]);
        const [currentNode, currentDist] = queue.shift();
        
        if (distances[currentNode] < currentDist) continue;
        
       
        for (const [nextNode, time] of graph[currentNode]) {
            const newDist = currentDist + time;
            if (newDist < distances[nextNode]) {
                distances[nextNode] = newDist;
                queue.push([nextNode, newDist]);
            }
        }
    }
    
    return distances.filter(dist => dist <= K).length;
}