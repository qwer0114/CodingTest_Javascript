function solution(n, w, num) {
    var answer = 0;
    let row = Math.ceil(n/w);
    let array = Array(row).fill().map(()=>Array(w).fill(0))
    let number =1;
    let targetIndex = [];
    
    for(let i = 0; i<row; i++){
        for(let j = 0; j<w; j++){
            array[i][j] = number;
            if(number===n) break;
            number+=1
        }
    }
    
    array = array.map((ar,index)=>{
        if(index%2!==0){
            return ar.reverse()
        }else return ar
    })
    
    for(let i = 0; i<row; i++){
        for(let j = 0; j<w; j++){
            if(array[i][j]===num){
                targetIndex= [i,j]
            }
        }
    }
    let [x,y] = targetIndex;
    
    for(let i = x+1; i<row; i++){
        if(array[i][y]!==0) answer+=1
    }
    return answer+1;
}