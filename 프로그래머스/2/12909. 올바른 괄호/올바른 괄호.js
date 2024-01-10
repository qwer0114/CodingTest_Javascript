function solution(s){
    var answer = 0;
    let array =[];
    if(s[0]===")") return false;
    for(let i of s){
        if(i === "(") array.push("(")
        else if(i===")") array.pop()
    }
   
    return array.length===0?true:false;
}