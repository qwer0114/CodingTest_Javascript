function solution(numbers, target) {
   let answer = 0;
    
   function dfs(v,sum){
       if(v===numbers.length){
          if(sum===target) answer+=1
           return;
       }
       dfs(v+1,sum+numbers[v])
       dfs(v+1,sum-numbers[v])
       
   }
    dfs(0,0)
   return answer
}