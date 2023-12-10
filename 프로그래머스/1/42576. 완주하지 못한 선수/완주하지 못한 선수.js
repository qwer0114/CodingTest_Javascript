function solution(participant, completion) {
    var answer = '';
    let map = new Map();
    let map1 = new Map();
  
        for(let a of completion){
         if(map1.has(a)) map1.set(a,(map1.get(a)+1))
         else map1.set(a,1)
    }
    
    
    for(let a of participant){
       if(
           map1.has(a)){
           map1.set(a,map1.get(a)-1)
           if(map1.get(a) === 0) map1.delete(a)
       }else if(!map1.has(a) || map1.get(a)>1) answer = a;
    }
    
    
    
    return answer;
}