function solution(dartResult) {
    var answer = 0;
    let number = "";
    let sum = [];
    for(let i =0; i<dartResult.length; i++){
        if(isNaN(dartResult[i])){
            if(dartResult[i]==="S"){
                sum.push(Number(number))
            }else if(dartResult[i]==="D"){
               sum.push(Number(number**2))
            }else if(dartResult[i]==="T"){
                sum.push(Number(number**3))
            }else if(dartResult[i]==="*"){
               sum[sum.length-2] = sum[sum.length-2]*2;
               sum[sum.length-1] = sum[sum.length-1]*2;
            }else if(dartResult[i]==="#"){
              sum[sum.length-1] = -sum[sum.length-1]
            }
            number = ""
        }else{
            number+=dartResult[i]
        }
    }
    sum = sum.filter((s)=>!isNaN(s));
    answer = sum.reduce((cur,acc)=>cur+acc)
    return answer;
}