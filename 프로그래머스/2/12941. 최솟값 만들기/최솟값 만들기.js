function solution(A,B){
   let answer = 0;
   let legnth = A.length;
   let array1 = A.sort((a,b)=>a-b);
   let array2 = B.sort((a,b)=>b-a);
   
   for(let i = 0; i<legnth; i++){
       answer += array1[i]*array2[i]
   }
    
   return answer
}