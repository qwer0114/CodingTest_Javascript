function solution(n, m, section) {
    var answer = 0;
    let painted = 0;
    let lastIndex;
    for(let i=0; i<section.length; i++){
         if(painted< section[i]){
             answer ++;
             painted = section[i] + m-1
         }
             
        
       
       
    }
    return answer;
}