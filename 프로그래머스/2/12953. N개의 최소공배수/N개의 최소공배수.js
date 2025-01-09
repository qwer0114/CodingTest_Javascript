function solution(arr) {
    var answer = 1;
    arr = arr.sort((a,b)=>a-b)
     let max = arr[arr.length-1]
     let min = arr[0]
     let x = max*min
     let condition = true
     let i = 1;
    while(condition){
        if(!checkArray(arr,x)){
            x += 1;
            x = x*i;
        }else return x*i
    }
    return answer;
}

function checkArray(arr,number){
    let result = true;
    arr.forEach((element,index)=>{
        if(number%element!==0){
            result = false;
            return
        }
    })
    return result
}