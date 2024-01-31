function solution(number, limit, power) {
    var answer = 0;
    let array = [];
    for(let i=1; i<=number; i++){
        let count = 0;
        for(let j =1; j<=Math.sqrt(i); j++){
           if (j * j == i) count++;
	        else if (i % j == 0) count += 2;
        } 
        if(count>limit) array.push(power)
        else array.push(count);
    }
    console.log(array)
   answer = array.reduce((a,b)=>a+b)
    
    return answer;
}