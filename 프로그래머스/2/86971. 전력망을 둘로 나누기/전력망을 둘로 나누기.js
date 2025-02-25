function solution(n, wires) {
    var answer = Infinity;
    let count = 0;
    let countArray = [];
    
   
    
   function makeGraph(filterWires){
     let graph = Array(n+1).fill().map(()=>[])
     for(let [a,b] of filterWires){
         graph[a].push(b);
         graph[b].push(a);
      }
       
      return graph
   }
    
 
  
    for(let i = 0; i<wires.length; i++){
        const filterWires = wires.filter(([a,b])=>{
             return !(a === wires[i][0] && b === wires[i][1]);
        })
        
        const graph = makeGraph(filterWires)
        const visited = Array(n+1).fill(false)
        let count = 0;
        function dfs(node){
            visited[node] = true
            count++
            for(let next of graph[node]){
                if(!visited[next]){
                     dfs(next)
                }
            }
            return count
        }
        dfs(1)
        const firstComponent = count;
        const secondComponent = n - firstComponent;
        answer = Math.min(answer,Math.abs(firstComponent-secondComponent))
    }
    
    return answer;
}