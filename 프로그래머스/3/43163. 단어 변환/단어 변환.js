function isAvailableWord(word1,word2){
    let length = word1.length;
    let count = 0;
    for(let i = 0; i<length; i++){
        if(word1[i]!==word2[i]) count++
    }
    return count===1?true:false
}

function solution(begin, target, words) {
    var answer = 0;
    let queue = [[begin,0]];
    
    if(!words.includes(target)) return 0
    
    while(queue.length>0){
        let [currentWord,count] = queue.shift();
        
        if(currentWord===target){
            return count
        }
        
        for(let nextWord of words){
            if(isAvailableWord(nextWord,currentWord)){
                queue.push([nextWord,count+1])
            }
        }
    }
    
}