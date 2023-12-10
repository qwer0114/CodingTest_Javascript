function solution(d, budget) {
    var answer = 0;
    let array = d.sort((a,b)=>a-b);
    let count = 0;
    for(let i =0; i<array.length; i++){
        budget-=array[i]
        answer ++;
        if(budget<0){
            return answer-1;
        }
        
    }
    return answer;
}