function solution(price, money, count) {
    var answer = -1;
    let total = 0;
    for(let i=1; i<=count; i++){
        total += price * i;
    }
    
    total>money ? answer = total-money : answer = 0;
    
    return answer;
}