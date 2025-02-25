function solution(weights) {
    let answer = 0;
   
    let ratios = [[1, 2], [2, 3], [3, 4]]; 
    let weightCount = {};
    
    
    for (let weight of weights) {
        weightCount[weight] = (weightCount[weight] || 0) + 1;
    }
    
 
    for (let weight in weightCount) {
        weight = Number(weight); 
        let count = weightCount[weight];
        
        if (count > 1) {
            answer += (count * (count - 1)) / 2;
        }
        
        for (let [x, y] of ratios) {
            const targetWeight1 = (weight * y) / x;
            if (weightCount[targetWeight1]) {
                answer += count * weightCount[targetWeight1];
            }
        }
    }
    
    
    return answer;
}