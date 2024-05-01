function solution(n, t, m, p) {
    var answer = '';
    let count = 0;
    let boolean = true;
    let myTurn = p;
    let turn = 1;
   while(boolean){
       let number = count.toString(n).toString();
       for(let i = 0; i<number.length; i++){
           if(turn === myTurn){
               answer+=number[i].toUpperCase()
               myTurn+=m;
           }
            if(answer.length === t)return answer;
           turn++;
       }
       count++;
   }
}