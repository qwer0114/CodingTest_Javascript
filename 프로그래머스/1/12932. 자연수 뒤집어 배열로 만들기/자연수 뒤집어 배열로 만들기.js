function solution(n) {
    var answer = [];
    let last = String(n).length-1
    
    for(let i = last; i>=0; i--){
        answer.push(Number(String(n)[i]))
    }
    
    return answer;
}