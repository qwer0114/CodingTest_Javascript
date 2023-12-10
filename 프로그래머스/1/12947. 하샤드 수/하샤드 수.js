function solution(x) {
    var answer = true;
    let string = x+"";
    let sum = string.split("").map(Number).reduce((acc,cur)=>acc+cur)
    Number(x)%sum === 0 ? answer = true: answer = false
    return answer;
}