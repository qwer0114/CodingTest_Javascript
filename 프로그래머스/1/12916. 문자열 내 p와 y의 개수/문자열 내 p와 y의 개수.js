function solution(s){
    var answer = 0;
    let string = s.toLowerCase();
    
    for(let a of string){
        if(a === "p") answer ++;
        else if(a === "y") answer --;
    }
    
    !answer? answer = true: answer = false
    

    return answer;
}