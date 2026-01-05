function solution(s) {
    var answer = '';
    let numbers = s.split(" ").map(Number);
    console.log(numbers)
    
    answer = `${Math.min(...numbers)} ${Math.max(...numbers)}`
    
    return answer;
}