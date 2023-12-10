function solution(number) {
    var answer = 0;
    
    for(let i=0; i<number.length; i++){
        for(let j=i+1; j<number.length; j++){
            for(let k=j+1; k<number.length; k++){
                if(number[j]+number[k] === -number[i]) answer++
            }
        }
    }
    
    return answer;
}