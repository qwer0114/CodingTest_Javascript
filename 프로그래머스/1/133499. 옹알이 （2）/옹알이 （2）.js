function solution(babbling) {
    var answer = 0;
    let array = ["aya","ye","woo","ma"];
    
    babbling.map((ba)=>{
         let string = ba;
          let boolean = false;
        for(let i = 0; i<array.length; i++){
            let index;
            while(string.includes(array[i])){
               index = string.indexOf(array[i])
               string =  string.replace(array[i], array[i][0].toUpperCase())
            }
        }
        console.log(string)
        if(string === string.toUpperCase()){
            boolean = true
        }
        for(let i = 0; i<string.length; i++){
            if(string[i] === string[i+1]) boolean = false
        }
        if(boolean) answer+=1
    })
    
    
    return answer;
}