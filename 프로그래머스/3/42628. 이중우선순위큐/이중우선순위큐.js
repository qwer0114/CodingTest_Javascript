function solution(operations) {
    let arr = [];
    
    for(let operation of operations){
        let [op, number] = operation.split(" ");
        
        if(op === "I") {
            arr.push(Number(number));
            arr.sort((a, b) => a - b);  
        } else if(number === "1") {
            if(arr.length > 0) arr.pop();    
        } else {
            if(arr.length > 0) arr.shift();   
        }
    }
    
    return arr.length === 0 ? [0, 0] : [arr[arr.length-1], arr[0]];
}
