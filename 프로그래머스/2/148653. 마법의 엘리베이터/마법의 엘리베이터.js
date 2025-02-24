function solution(storey) {
    let answer = 0;
    
    while (storey > 0) {
        const lastDigit = storey % 10;
        const nextDigit = Math.floor(storey / 10) % 10;
        
        if (lastDigit > 5) {
            answer += (10 - lastDigit);
            storey += (10 - lastDigit);
        } else if (lastDigit === 5) {
            if (nextDigit >= 5) {
                answer += 5;
                storey += 5;
            } else {
                answer += 5;
                storey -= 5;
            }
        } else {
            answer += lastDigit;
            storey -= lastDigit;
        }
        
        storey = Math.floor(storey / 10);
    }
    
    return answer;
}