function solution(k, dungeons) {
  let max = 0;
  let visited = Array(dungeons.length).fill(false)
  
  function dfs(currentTired,count){
      max = Math.max(max,count)
      
      for(let i = 0; i<dungeons.length; i++){
          if(!visited[i] && currentTired>=dungeons[i][0]){
              visited[i] = true;
              dfs(currentTired-dungeons[i][1],count+1)
              visited[i] = false;
          }
      }
  }
    
  dfs(k,0)
  return max
}
