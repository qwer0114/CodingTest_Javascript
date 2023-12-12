function solution(array, commands) {
    var answer = [];
    let startIndex = 0;
    let endIndex = 0;
    let target = 0;
    let arr = [];
    
    for(let a of commands){
        console.log(a)
        startIndex = a[0]-1;
        endIndex = a[1]-1;
        target = a[2]-1;
        for(let i = startIndex; i<=endIndex; i++){
           arr.push(array[i])
        }
        answer.push(arr.sort((a,b)=>a-b)[target]);
        startIndex = 0;
        endIndex = 0;
        target = 0;
        arr = []
    }
    
    return answer;
}