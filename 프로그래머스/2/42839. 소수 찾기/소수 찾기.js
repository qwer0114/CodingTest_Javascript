function solution(numbers) {
    const set = new Set()
    numbers = numbers.split("")
    let visited = new Array(numbers.length).fill(false)
    
    function dfs(current){
        if(current.length > 0 ){
            const parse = Number(current);
            if(isPrimeNumber(parse)) set.add(parse)
            
        }
            for(let i = 0; i<numbers.length; i++){
                if(!visited[i]){
                    visited[i] = true;
                    dfs(current+numbers[i])
                    visited[i] = false;
                }
               
            }
        
    }
    
    dfs("")
 
    return set.size;
}

function isPrimeNumber(number){
    let target = Number(number);
    
    if(target<=1) return false;
    for(let i = 2; i<target; i++){
        if(target%i===0){
           return false;
        }
    }
    
    return true
}