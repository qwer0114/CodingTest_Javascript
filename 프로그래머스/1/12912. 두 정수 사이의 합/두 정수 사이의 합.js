function solution(a, b) {
    var answer = 0;
    let bigger = Math.max(a,b)
    let miner = Math.min(a,b)
    for(let i =miner; i<=bigger; i++){
        answer += i
    }
    return answer;
}