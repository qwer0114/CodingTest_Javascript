function solution(numbers) {
    let answer = Array.from({ length: numbers.length }, () => -1);
    let stack = [];
    for(let i = 0; i<numbers.length; i++){
       while(numbers[stack.at(-1)]<numbers[i]){
             answer[stack.pop()] = numbers[i]
       }        
        stack.push(i)
    }
   
    return answer;
}