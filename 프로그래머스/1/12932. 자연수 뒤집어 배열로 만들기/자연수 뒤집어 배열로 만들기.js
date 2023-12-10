function solution(n) {
    var answer = [];
    let string = n.toString();
    for(let a of string){
        answer.unshift(Number(a))
    }
    return answer;
}