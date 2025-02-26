function gcd(a,b){
   return b === 0 ? a:gcd(b,a%b);
}

function findAnswer(array,number){
    let condition = true;
    
    if(!number) return 0;
    
    for(let i = 0; i<array.length; i++){
        if(array[i]%number === 0){
            condition = false;
            break;
        }
    }
    return condition?number:0
}

function solution(arrayA, arrayB) {
    var answer = 0;
    let [a,b] = [arrayA[0],arrayB[0]]
    
    for(let i =1; i<arrayA.length; i++){
        a = gcd(a,arrayA[i]);
        b = gcd(b,arrayB[i]);
    }

   

    return Math.max(findAnswer(arrayA,b),findAnswer(arrayB,a));
}