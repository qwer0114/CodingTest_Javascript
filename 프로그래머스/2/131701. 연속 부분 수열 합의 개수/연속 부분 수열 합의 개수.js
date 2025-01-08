function solution(elements) {
    const circular = [...elements,...elements];
    const length = elements.length;
    
    const set = new Set();
    for(let i =0; i<length; i++){
        for(let j = 0; j<length; j++){
           const sum = circular.slice(j,j+i).reduce((acc,cur)=>acc+cur,0)
           set.add(sum)
    }
}
   
    return set.size;
}