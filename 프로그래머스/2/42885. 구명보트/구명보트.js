function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>b-a);
    let smallest = people.length-1
    
   
        for(let i=0; i<people.length; i++){
        if(i>=smallest) break;
        if(people[i]+people[smallest] <= limit){
            answer+=1;   
            smallest-=1;
        }
    }
 
    return people.length - answer;
}