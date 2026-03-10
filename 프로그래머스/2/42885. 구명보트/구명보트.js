function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => a - b);
    let lt = 0;
    let rt = people.length - 1;

    while (lt <= rt) {       
        if (people[lt] + people[rt] <= limit) {
            lt++;              
        }
        rt--;                   
        answer++;              
    }

    return answer;
}