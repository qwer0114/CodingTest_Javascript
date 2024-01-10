function solution(n) {
    var answer = 0;
    let number = n.toString(2);
    let oneCount =0;
    let oneCount2 = 0;
    let boolean = true
    for(let i of number){
        if(i==="1") oneCount++
    }
   while(boolean){
       answer = ++n;
       for(let i of answer.toString(2)){
           if(i==="1") oneCount2++
       }
       if(oneCount2 === oneCount) boolean = false;
       oneCount2 = 0;
   }
    return answer;
}