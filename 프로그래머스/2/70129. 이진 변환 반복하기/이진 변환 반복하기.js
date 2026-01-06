function solution(s) {
    var answer = [];
    let count = 0 ;
    let zeroCount = 0;
    let number = s;
    
    while(number!=="1"){
        let temp = 0
        for(let i =0; i<number.length; i++){
            if(number[i] === "0"){
                zeroCount+=1
            }else{
                temp+=1
            }
        }
        number = temp.toString(2);
        count +=1
    }
    
    return [count,zeroCount];
}