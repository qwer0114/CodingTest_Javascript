function solution(n, words) {
    var answer = [];
    let array = [words[0]];
   
    for(let i=1; i<words.length; i++){
        if(array[array.length-1][array[array.length-1].length-1] !== words[i][0] || array.includes(words[i])){
           if(i+1<n){
               answer.push(i+1)
               answer.push(1)
               return answer
           }
            if((i+1)%n === 0){
                answer.push(n)
                answer.push((i+1)/n)
                return answer
            }else{
                 answer.push((i+1)%n)
                answer.push(Math.floor((i+1)/n)+1)
                return answer
            }
            console.log(i)
        }else{
            array.push(words[i])
        }
    }

    return [0,0];
}