function solution(wallpaper) {
    var answer = [];
    let x = [];
    let y = [];
    
    wallpaper.map((wall,i)=>{
        if(wall.includes("#")){
            for(let i =0; i<wall.length; i++){
                if(wall[i]==="#")x.push(i)
            }
            y.push(i)
        }
    })
    console.log(y)
    console.log(x)
   
    answer.push(Math.min(...y));
    answer.push(Math.min(...x));
    answer.push(Math.max(...y)+1);
    answer.push(Math.max(...x)+1)
    return answer;
}