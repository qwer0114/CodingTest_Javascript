function solution(s) {
    var answer = [];
    let count = 0;
    let zeroCount = 0;
    let add = 0;
    while(s!=="1"){
     for(let i = 0; i<s.length; i++){
        if(s[i]==="0"){
            zeroCount++;
        }
    }
     s = Number(s.length - zeroCount).toString(2).toString()
     add+=zeroCount;
     zeroCount = 0;
     count++;
    }
    
    answer = [count,add];
    return answer;
}