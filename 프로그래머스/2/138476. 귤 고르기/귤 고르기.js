function solution(k, tangerine) {
    var answer = 0;
    let map = new Map();
    
    for(let t of tangerine){
        if(map.has(t)){
            map.set(t,map.get(t)+1)
        }else{
            map.set(t,1)
        }
        
    }
    
    const mapToArray = [...map]
    mapToArray.sort((a,b)=>b[1]-a[1]);
    
    
    for(let [tangerine, count] of mapToArray){
        answer++;
        k-=count
        if(k<=0){
            return answer
        }
    }
    
    
    
    return answer;
}