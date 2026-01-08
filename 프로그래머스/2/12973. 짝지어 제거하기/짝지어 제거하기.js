function solution(s){
    var answer = -1;
    let stack = [];
    
    for(let word of s){
        if(stack.length === 0){
            stack.push(word);
        }else{
             const beforeWord = stack.at(-1);
        
        if(beforeWord === word){
            stack.pop()
        }else{
            stack.push(word)
        }
        }
       
        
        
    }

  

    return stack.length ? 0 : 1;
}