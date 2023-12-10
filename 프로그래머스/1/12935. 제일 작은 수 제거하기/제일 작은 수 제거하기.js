function solution(arr) {
    var answer = [];
    let array = [...arr]
    let min = array.sort((a,b)=>b-a).pop();
    
    arr.length === 1 ? answer.push(-1): answer=arr.filter((a)=>a!==min)
    
         
   
    return answer;
}