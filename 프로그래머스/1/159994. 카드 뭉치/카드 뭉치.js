  function solution(cards1, cards2, goal) {
            var answer = 'Yes';

             for(let i=0; i<goal.length; i++){
                if(cards1.length>0 && cards1[0] === goal[i]){
                    cards1.shift();
                    continue;
                }else if(cards2.length>0 && cards2[0] === goal[i]){
                    cards2.shift();
                }else{
                    answer = "No"
                    break;
                }
             }

           
             return answer;
}