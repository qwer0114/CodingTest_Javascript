function solution(a, b, n) {
    var answer = 0;
    let rest = 0;
    let eat = n;
    while(eat>=a){
       
            answer += Math.floor(eat/a)*b
            eat = Math.floor(eat/a)*b + eat%a;
       
       
    }
    return answer;
}