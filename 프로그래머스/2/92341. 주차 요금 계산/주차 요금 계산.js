function solution(fees, records) {
    var answer = [];
    // 금액 -> 기본시간 + (걸린시간)/단위시간 *단위요금
    let 기본시간 = fees[0];
    let 기본요금 = fees[1];
    let 단위시간 = fees[2];
    let 단위요금 = fees[3];
    let map = new Map();
    let moneyMap = new Map();
    for(let record of records){
        let [time,number,enter] = record.split(" ");
        if(!map.has(number)){
            map.set(number,time)
        }else{
            if(moneyMap.has(number)){
                moneyMap.set(number,moneyMap.get(number)+getTime(map.get(number),time))
            }else{
                 moneyMap.set(number,getTime(map.get(number),time))
            }
           
            map.delete(number)
        }
    }
    map = [...map]
    for(let i =0; i<map.length; i++){
        let [number,time] = map[i];
        if(moneyMap.has(number)){
                moneyMap.set(number,moneyMap.get(number)+getTime(time,"23:59"))
            }else{
                 moneyMap.set(number,getTime(time,"23:59"))
            }
    }
    moneyMap = [...moneyMap].sort((a,b)=>a[0]-b[0]);
    console.log(moneyMap)
    for(let i =0; i<moneyMap.length; i++){
        let [number,totalTime] = moneyMap[i];
        let fee = 0;
        if(totalTime>기본시간){
            fee = 기본요금 + (Math.ceil((totalTime-기본시간)/단위시간))*단위요금
        }else{
            fee = 기본요금
        }
        answer.push(fee)
    }
    
    return answer;
}


function getTime(inTime,outTime){
    let [inHour,inMinute] = inTime.split(":").map((n)=>Number(n));
    let [outHour,outMinute] = outTime.split(":").map((n)=>Number(n));
    return (outHour*60+outMinute) - (inHour*60+inMinute)
}