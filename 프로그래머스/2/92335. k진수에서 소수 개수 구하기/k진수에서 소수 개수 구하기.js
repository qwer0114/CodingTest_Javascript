function isPrime(num) {
	if(num === 1) return false; 
 	for(let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
  		if(num % i === 0) return false;
	} 
    return true; 
}
function solution(n, k) {
    var answer = 0;
    let changeNum = n.toString(k);
    let array = changeNum.split(0).filter((n)=>n!=="");
    for(let i =0; i<array.length; i++){
        if(isPrime(Number(array[i]))){
            answer++;
        }
    }
    return answer;
    
    


}