function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    
    let answer = 0;
    let camera = -Infinity;
    
    for(let [start,end] of routes){
        if(start>camera){
            answer++;
            camera = end
        }
    }
    
    return answer;
}