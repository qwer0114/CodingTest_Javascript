function solution(t, p) {
    var answer = [];
    let length = p.length;
    
    for(let i=0; i<t.length; i++){
        answer.push(t.substr(i,p.length))
    }
    
  answer = answer.filter((a)=>a.length==p.length && a<=p).length
    
    return answer;
}