function solution(k, tangerine) {
    var answer = 1;
    tangerine.sort((a,b)=>a-b);
    let object = {};
    let sum = 0;
    let boolean = true;
    for(let a of tangerine){
        object[a]!==undefined? object[a]+=1 :object[a] = 1;
    }
    
   let count = [...Object.values(object)].sort((a,b)=>b-a);
    console.log(count)
    
    for(let i = 0; i<count.length; i++){
        sum = sum + count[i]
        if(sum>=k) break;
        answer++;
    }
    
    
    return answer;
}
