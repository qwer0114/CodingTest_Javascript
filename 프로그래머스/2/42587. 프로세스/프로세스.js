function solution(priorities, location) {
    var answer = 0;
    let boolean = true;
    let array = [];
   
        while(boolean){
             for(let i=0; i<priorities.length; i++){
             let max = Math.max(...priorities)
                if(priorities[i] === max){
                     priorities[i] = 0;
                     answer +=1;
                 if(i===location) return answer
                }
        }
        }
       
    return answer;
}