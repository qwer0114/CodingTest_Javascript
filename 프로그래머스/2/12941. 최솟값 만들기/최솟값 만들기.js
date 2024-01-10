function solution(A,B){
    var answer = 0;
    let array1 = A.sort((a,b)=>a-b);
    let array2 = B.sort((a,b)=>b-a);
    
    for(let i=0; i<array1.length; i++) answer = answer+ (array1[i]*array2[i])

    return answer;
}