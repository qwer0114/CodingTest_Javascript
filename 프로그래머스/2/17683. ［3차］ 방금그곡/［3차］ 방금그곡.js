function calculatePlayTime(beforeTime,afterTime){
    let [beforeHour,beforeMinute] = beforeTime.split(":").map(Number);
    let [afterHour,afterMinute] = afterTime.split(":").map(Number);
    
    let afterMinutes = afterHour*60 + afterMinute;
    let beforeMinutes = beforeHour*60 + beforeMinute;
    
    return afterMinutes-beforeMinutes
}

function makeMelodyArray(melody){
    let melodyArray = [];
    
    for(let m of melody){
        if(m==="#"){
            let lastMelody = melodyArray.pop();
            melodyArray.push(`${lastMelody}#`)
        }else{
            melodyArray.push(m)
        }
    }
    return melodyArray;
}

function makeRealPlayedMelody(melody,playTimes){
    let repeat = playTimes - melody.length;
    let newMelody = [...melody]
    if(repeat<=0){
        return melody.slice(0,playTimes)
    }else{
         let index = 0;
        for(let i = 0; i<repeat; i++){
            if(index === melody.length) index = 0;
            newMelody.push(melody[index])
            index++
        }
        return newMelody
    }
}

function isTheMusic(realMelody, neoMelody) {
    for (let i = 0; i <= realMelody.length - neoMelody.length; i++) { 
        if (realMelody[i] === neoMelody[0]) {
            let radioMelody = realMelody.slice(i, i + neoMelody.length);
            if (radioMelody.join("") === neoMelody.join("")) return true;
        }
    }
    return false;
}

function solution(m, musicinfos) {
    var answer = [];
    let neoTime = m.length;
    let neoMelody = makeMelodyArray(m);
   
    for(let music of musicinfos){
        let [beforeTime,afterTime,musicName,melodies] = music.split(",");
        let playTimes = calculatePlayTime(beforeTime,afterTime);
        if(neoMelody.length>playTimes) continue;
        let radioMelodyArray = makeMelodyArray(melodies);
        let realMelody = makeRealPlayedMelody(radioMelodyArray,playTimes);
        
        if(isTheMusic(realMelody,neoMelody)) answer.push([musicName,playTimes])
    }
    answer = answer.sort((a,b)=>b[1]-a[1])
    
    return answer.length > 0 ? answer[0][0] : "(None)";
}

