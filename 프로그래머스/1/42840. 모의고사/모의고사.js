function solution(answers) {
    var answer = [];
    let supoja1 = [1,2,3,4,5]
    let supoja2 = [2,1,2,3,2,4,2,5]
    let supoja3 = [3,3,1,1,2,2,4,4,5,5]
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let answer1 = 0;
    let answer2 = 0;
    let answer3 = 0;
    console.log(answers.length)
    for(let i=0; i<answers.length; i++){
          if(count1>supoja1.length-1) count1 =0;
          if(supoja1[count1] === answers[i]) answer1+=1;
            count1 += 1;
          
        
       if(count2>supoja2.length-1) count2 =0;
          if(supoja2[count2] === answers[i]) answer2+=1;
            count2 += 1;
        
         if(count3>supoja3.length-1) count3 =0;
          if(supoja3[count3] === answers[i]) answer3+=1;
            count3 += 1;
        
    }
     console.log(answer1)
    console.log(answer2)
    console.log(answer3)
    let max = Math.max(answer1,answer2,answer3)
   
    if (answer1 === max) answer.push(1);
    if (answer2 === max) answer.push(2);
    if (answer3 === max) answer.push(3);
   return answer
} 


