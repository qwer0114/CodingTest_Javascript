function solution(elements) {
    let answer = [];
    const length = elements.length;
    
    
    for(let i =0; i<length; i++){
        let temp = [];
        for(let j = i; j<length+i; j++){
            if(!temp.length) {
                temp.push(elements[i])
            } else{
                temp.push(temp[temp.length-1]+elements[Math.floor(j%length)])
            }
        }
        answer = [...answer,...temp]
    }
    const set = new Set(answer);
    return set.size;
}