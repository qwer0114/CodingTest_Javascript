function solution(n, works) {
    var answer = 0;
    works = works.sort((a,b)=>b-a);
    const totalWorks = works.reduce((acc,cur)=>acc+cur)
    if(n>=totalWorks) return 0
    
    while(n){
        let max = works[0]
        for(let i = 0; i<works.length; i++){
            if(works[i]>=max){
                works[i] -=1;
                n-=1;
                if(!n) break
            }
        }
        
    }
    
    for(let i = 0; i<works.length; i++){
        answer += works[i]**2
    }
   
    return answer;
}