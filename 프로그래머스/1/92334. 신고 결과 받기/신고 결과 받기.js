function solution(id_list, report, k) {
    var answer = [];
    let object = {}
    let map = new Map();
    report = [...new Set(report)]
    report.map((rep)=>{
       let array = rep.split(" ");
       if(!object[array[0]])object[array[0]] = [array[1]]
       else object[array[0]] = [...object[array[0]],array[1]]
       map.set(array[1],map.get(array[1])+1||1)
    })
    map = new Map([...map].filter((m)=>m[1]>=k))
    
    id_list.map((id)=>{
        let count = 0;
        if(object[id]){
            object[id].map((o)=>{
                if(map.has(o)) count+=1;
            })
            answer.push(count)
        }else{
              answer.push(count)
        }
    })
    
    return answer;
}