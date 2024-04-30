function solution(prices) {
    var answer = [];
    let count = 0;
    let flag = true;
    for(let i =0; i<prices.length; i++){
        for(let j = i+1; j<prices.length; j++){
            if(prices[i]<=prices[j]){
                count++;
            }else{
                answer.push(count+1);
                flag = false;
                break;
            }
        }
        if(flag)answer.push(count);
        flag = true;
        count = 0;
    }
    return answer;
}