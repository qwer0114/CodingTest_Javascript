function solution(friends, gifts) {
    friends = friends.sort((a,b)=>a-b);
    gifts = gifts.sort((a,b)=>a-b)
    var answer = {};
    let map = new Map();
    let map2 = new Map();
    
    for(let i =0; i<friends.length; i++){
        answer[friends[i]] = 0;
        map.set(friends[i],{})
        map2.set(friends[i],0);
    }   
      
    
    giftRecord(gifts,map)
    giftRate(friends,gifts,map2)
   
    
    for(let i = 0; i<friends.length; i++){
        let members = Object.keys(map.get(friends[i]));
        let notGave = [...friends];
        let same = [];
        notGave.splice(i,1)
        for(let k =0; k<members.length; k++){
            let num;
             notGave.splice(notGave.indexOf(members[k]),1)
            if(map.get(members[k])[friends[i]]) num = map.get(members[k])[friends[i]]
            else num = 0;
            if(map.get(friends[i])[members[k]]>num){
                answer[friends[i]]+=1;
            }else if(map.get(friends[i])[members[k]]===num){
                same.push(members[k])
            }
        }
       notGave = notGave.filter((not)=>map.get(not)[friends[i]]===undefined)   
       for(let j = 0; j<notGave.length; j++){
            if(map2.get(friends[i])>map2.get(notGave[j])) answer[friends[i]]+=1
        }
        for(let j = 0; j<same.length; j++){
            if(map2.get(friends[i])>map2.get(same[j])) answer[friends[i]]+=1
        }
    }

 
    return Math.max(...Object.values(answer));
}

function giftRecord(gifts,map){
     gifts.map((gift)=>{
        let list = gift.split(" ")
        if(!map.get(list[0])[list[1]]){
            map.set(list[0],{
                ...map.get(list[0]),
                [list[1]]:1
            })
        }else{
             map.set(list[0],{
                 ...map.get(list[0]),
                 [list[1]]:map.get(list[0])[list[1]]+1})
        }
       
    })
}

function giftRate(friends,gifts,map2){
    for(let i =0; i<friends.length; i++){
        let give = 0;
        let take = 0;
        for(let k = 0; k<gifts.length; k++){
            let gift = gifts[k].split(" ")
            if(friends[i]===gift[0])give++
            else if(friends[i]===gift[1])take++;
        }
        map2.set(friends[i],give-take)
    }
}