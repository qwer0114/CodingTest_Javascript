function solution(k, score) {
    var answer = [];
    let array = [];
    for(let i=0; i<score.length; i++){
        if(array.length >= k){
           if(array[0]<score[i]){
               array[0] = score[i]
               array.sort((a,b)=>a-b);
               answer.push(array[0]);
           }else{
               answer.push(array[0])
           }
        }else{
             array.push(score[i]);
            array.sort((a,b)=>a-b);
            answer.push(array[0])
        }
     
    }
    return answer;
}