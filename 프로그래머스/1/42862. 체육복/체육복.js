function solution(n, lost, reserve) {
    var answer = 0;

    answer = n - lost.length;
   lost.sort((a,b)=>a-b)
    reserve.sort((a,b)=>a-b)
     let lost2 = [...lost]
     for(let l of lost){
        if(reserve.includes(l)){
            lost2.splice(lost2.indexOf(l),1)
            reserve.splice(reserve.indexOf(l),1)
            answer +=1;
         
        }
     }
    for(let l of lost2){
         if(reserve.includes(l-1)){
                reserve.splice(reserve.indexOf(l-1),1)
                 answer+=1;
         }else if(reserve.includes(l+1)){
                reserve.splice(reserve.indexOf(l+1),1)
                answer+=1;
        }
        
    }
    return answer;
}