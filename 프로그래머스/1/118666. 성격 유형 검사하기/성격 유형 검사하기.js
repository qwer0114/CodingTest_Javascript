function solution(survey, choices) {
    var answer = '';
    let mbti = ["RT","CF","JM","AN"]
    let map = new Map([["R",0],["T",0],["C",0],["F",0],["J",0],["M",0],["A",0],["N",0]]);
    choices.map((choice,i)=>{
        if(choice>4){
          map.set(survey[i][1],map.get(survey[i][1])+choice-4)
        }else{
          map.set(survey[i][0],map.get(survey[i][0])+4-choice)
        }
    })
    mbti.map((mb,i)=>{
        let m1 = mb[0];
        let m2 = mb[1];
        if(map.get(m1)<map.get(m2)){
            answer+= mbti[i][1]
        }else{
            answer+=mbti[i][0]
        }
    })
    return answer;
}