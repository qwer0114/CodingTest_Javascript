function solution(skill, skill_trees) {
    var answer = 0;
    console.log(skill)
    skill_trees.map((s)=>{
        let array = [];
        let skillArray = skill.split("")
        for(let i =0; i<s.length; i++){
            if(skillArray.includes(s[i])) array.push(s[i])
        }
        for(let i = 0; i<skillArray.length; i++){
            if(!skillArray.includes(array[i]))skillArray[i]=""
        }
        if(skillArray.join("")===array.join(""))answer+=1;
    })
    
    return answer;
}