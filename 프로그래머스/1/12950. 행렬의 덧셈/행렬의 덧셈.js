function solution(arr1, arr2) {
    var answer = [];
    let sum = [];
    
    
    for(let i=0; i<arr1.length; i++){
        sum = [];
        for(let j=0; j<arr1[i].length; j++){
           sum.push(arr1[i][j] + arr2[i][j])
          
        }
        answer = [...answer,sum]
    }
    return answer;
}