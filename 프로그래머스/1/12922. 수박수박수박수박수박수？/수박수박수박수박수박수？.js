function solution(n) {
    var answer = '';
    let string = "수박"

    if(n%2 === 0){
        for(let i=1; i<=n/2; i++){
            answer += string;
        }
    }else {
        for(let i=1; i<=Math.floor(n/2); i++){
            answer +=string;
        }
        answer += string[0]
    }
    
    return answer;
}