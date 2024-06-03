function solution(record) {
    var answer = [];
    let map = new Map();
    
    record.map((rec)=>{
        let memo = rec.split(" ")
        if(memo[0]==="Enter" || memo[0]==="Change"){
            map.set(memo[1],memo[2])
        }
    })
    record.map((rec)=>{
        let memo = rec.split(" ");
        if(memo[0]=="Enter")answer.push(`${map.get(memo[1])}님이 들어왔습니다.`)
        else if(memo[0]==="Leave")answer.push(`${map.get(memo[1])}님이 나갔습니다.`)
    })
    
    return answer;
}