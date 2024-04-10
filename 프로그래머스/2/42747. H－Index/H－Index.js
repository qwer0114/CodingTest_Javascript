function solution(citations) {
    citations.sort((a,b)=>a-b);
    let average = Math.floor((citations.reduce((a,b)=>a+b)) / citations.length)
    let higerValue = 0;
    let lowerValue = 0;
    while(true){
        let newArray = citations.filter((a)=>a >= average)
        higerValue = newArray.length;
        lowerValue = citations.length - higerValue;
        if(higerValue>= average && lowerValue<=average){
            return average;
        }
        if(higerValue < average){
            average -=1;
            continue;
        }else if(lowerValue>average){
            average +=1;
            continue;
        }
    }
    
    var answer = 0;
    let hIndex = 0;
   
    return answer;
}