function solution(arr, divisor) {
    var answer = [];
    
    arr.map((a)=>{
        if(a%divisor === 0){
            answer.push(a)
        }
    })
    !answer.length ? answer.push(-1) : null
    
    return answer.sort((a,b)=>a-b);
}