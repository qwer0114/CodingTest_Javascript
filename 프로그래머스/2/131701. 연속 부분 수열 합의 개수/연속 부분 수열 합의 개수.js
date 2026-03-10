function solution(elements) {
    var answer = 0;
    let doubled = [...elements,...elements];
    let n = elements.length;
    let set = new Set();
    
    for(let i =1; i<=n; i++){
        for(let index = 0; index<n; index++){
            let sum = 0;
            for(let k = index; k<index+i; k++){
                sum+=doubled[k]
            }
            set.add(sum)
        }
    }
    return set.size;
}