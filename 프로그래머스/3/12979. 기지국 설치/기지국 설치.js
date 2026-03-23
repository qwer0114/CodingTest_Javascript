function solution(n, stations, w) {
    let answer = 0;
    let prev = 1; 
    
    for (const station of stations) {
        const start = station - w; 
        
        const gap = start - prev;
        if (gap > 0) {
            answer += Math.ceil(gap / (2 * w + 1));
        }
        
        prev = station + w + 1; 
    }
    
 
    const gap = n - prev + 1;
    if (gap > 0) {
        answer += Math.ceil(gap / (2 * w + 1));
    }
    
    return answer;
}


