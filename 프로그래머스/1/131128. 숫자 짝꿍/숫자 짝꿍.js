function solution(X, Y) {
    
    const map = new Map();
    
   
    for (let char of Y) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    
  
    let commonChars = [];
    for (let char of X) {
        if (map.has(char) && map.get(char) > 0) {
            commonChars.push(char);
            map.set(char, map.get(char) - 1);
        }
    }
    
  
    if (commonChars.length === 0) return "-1";
    
    let answer = commonChars.sort((a, b) => b - a).join("")
    return answer[0] ==="0"?"0":answer
}