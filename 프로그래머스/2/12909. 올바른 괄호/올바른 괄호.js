function solution(s){
  if(s.startsWith(")")) return false
  
  let stack = [];
    
  for(let p of s){
      if(p === "("){
         stack.push(p);
      }else{
        stack.pop();
      }
  }  
    
    return stack.length === 0 
    
}