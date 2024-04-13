function solution(s) {
    var answer = [];
    let result = s.slice(2, -2) 
                .split("},{") 
                .map(subStr => subStr.split(",").map(Number));
    result.sort((a,b)=>a.length - b.length)
    console.log(result)
    result.map((array)=>{
            for(let i =0; i<=answer.length; i++){
                if(!answer.includes(array[i])) answer.push(array[i])
            }
    })
    return answer.filter((answer)=>answer!=null);
}