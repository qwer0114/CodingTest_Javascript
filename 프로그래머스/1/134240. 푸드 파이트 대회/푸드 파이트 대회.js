function solution(food) {
    var answer = '';
    let count = 0;
    let arr = []
    for(let i =1; i<food.length; i++){
        if(food[i]%2 !== 0){
            for(let j=0; j<(food[i]-1)/2; j++){
                arr.push(i)
            }
        }else{
            for(let j=0; j<(food[i])/2; j++){
                arr.push(i)
            }
        }
    }
   
    return arr.join("")+"0"+arr.sort((a,b)=>b-a).join("");
}