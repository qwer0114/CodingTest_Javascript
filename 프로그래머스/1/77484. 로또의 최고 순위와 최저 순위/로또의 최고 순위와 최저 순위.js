function rank(number){
    if(number ===6) return 1;
    else if(number===5) return 2;
    else if(number===4) return 3;
    else if(number===3) return 4;
    else if(number===2) return 5;
    else return 6;
}
function solution(lottos, win_nums) {
    var answer = [];
    let best = 0;
    let worst = 0;
    let unknown = 0;
    lottos.map((lotto)=>{
        if(win_nums.includes(lotto)) worst+=1;
        else if(lotto===0) unknown+=1;
    })
    best = worst+unknown;
    answer.push(rank(best))
     answer.push(rank(worst))
    return answer;
}

