function solution(k, m, score) {
    var answer = 0;
    let array = score.sort((a,b)=>b-a);
    let array2 = [];
    let box = Math.floor(array.length/m);
    for(let i =0; i<array.length; i+=m){
        array2.push(array.slice(i,i+m));
    }
    
    for(let i=0; i<=box-1; i++){
       answer += array2[i][m-1] * m
    }
    
    return answer;
}