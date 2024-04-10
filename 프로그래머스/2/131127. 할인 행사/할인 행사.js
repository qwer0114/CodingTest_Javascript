function solution(want, number, discount) {
    let day = 0;
    let answer = 0;
    let hap = number.reduce((a,b)=>a+b)
    for(let i=0; i<discount.length; i++){
        let boolean = []
        let item = discount.slice(i,i+hap);
        for(let j=0; j<want.length; j++){
            let count = 0;
            for(let k=0; k<item.length; k++){
                if(want[j] === item[k]){
                    count+=1;
                }
            }
            if(count< number[j]) boolean.push(false);
            else boolean.push(true);
        }
        if(!boolean.includes(false)){
            day++
        }
       
    }

    return day;
}