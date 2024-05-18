function getMinute(time){
    let t = time.split(":");
    let hour;
    let minute
    hour = Number(t[0])*60;
    minute = Number(t[1])
    return Number(hour+minute);
}
function solution(fees, records) {
    var answer = [];
    let map = new Map();
    let minute = new Map();
    records.map((record)=>{
        let rec = record.split(" ");
        if(rec[2]==="IN"){
            map.set(rec[1],rec[0]);
        }else if(rec[2]==="OUT"){
           let takeTime = Math.abs(getMinute(rec[0]) - getMinute(map.get(rec[1])))
           if(minute.has(rec[1])){
               minute.set(rec[1],minute.get(rec[1])+takeTime)
           }else{
               minute.set(rec[1],takeTime);
           }
              map.delete(rec[1]);
        }
    })
   
    if(map.size!==0){
         let keys = [...map.keys()]
        keys.map((key)=>{
            let takeTime = Math.abs(getMinute("23:59") - getMinute(map.get(key)))
            if(minute.has(key)){
                 minute.set(key,minute.get(key)+takeTime)
            }else{
                minute.set(key,takeTime)
            }
           
        })
    }
    let minuteKeys = [...minute.keys()].sort();
    for(let i =0; i<minuteKeys.length; i++){
        if(minute.get(minuteKeys[i])<=fees[0]){
            answer.push(fees[1])
        }else{
            console.log(minute.get(minuteKeys[i]))
            let time = Math.ceil((minute.get(minuteKeys[i])-fees[0])/fees[2])
            console.log(time)
            let money = fees[1]+(time*fees[3])
            answer.push(money)
        }
    }
    return answer;
}