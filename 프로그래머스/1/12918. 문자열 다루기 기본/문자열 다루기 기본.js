function solution(s) {
    var answer = true
    if(s.length === 4 || s.length ==6){
          for(let a of s){
        if(isNaN(a)) return false
    }
    }else{
        return  false
    }
    
    
  
    return answer;
}