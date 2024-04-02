function solution(n,a,b)
{
    var answer = 0;
    let boolean = true;
    
    while(boolean){
         if(a===b) boolean = false;
          a = nextNumber(a);
          b = nextNumber(b);
        
          answer++;
       
        
    }

  
    return answer-1;
    
    function nextNumber(number){
        if(number%2 === 0){
            return number/2
        }else{
            return Math.floor(number/2)+1;
        }
    }
}