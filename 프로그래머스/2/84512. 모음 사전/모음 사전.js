function solution(word) {
    let string = "";
    const result = [];
    for(let i = 1; i<=5; i++){
        dfs(string,i,result)
    }

    return result.sort().indexOf(word)+1;
}

function dfs(string,length,result){
    const array = [..."AEIOU"];
    if(length === string.length){
        result.push(string);
        return;
    }
    array.forEach((element)=>{
        dfs(string+element,length,result);
    })
}