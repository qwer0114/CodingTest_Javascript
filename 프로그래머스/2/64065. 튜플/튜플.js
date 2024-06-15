function solution(s) {
    var answer = [];
    let array = [];
     s = s.split("},{").join(".")
     for(let i =0; i<s.length; i++){
         if(s[i]==="}"||s[i]==="{") continue
         array.push(s[i])
     }
    array = array.join("").split(".").sort((a,b)=>a.length-b.length)
    array.map((arr)=>{
        let numbers = arr.split(",")
        for(let i =0; i<numbers.length; i++){
            if(!answer.includes(Number(numbers[i])))answer.push(Number(numbers[i]))
        }
    })
    return answer
}