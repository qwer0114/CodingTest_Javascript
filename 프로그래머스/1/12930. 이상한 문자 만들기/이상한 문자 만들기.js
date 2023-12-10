function solution(s) {
    var answer = [];
    var string = "";
    let array = s.split(" ")
    
    for(let a of array){
        string = ""
        for(let i=0; i<a.length; i++){
            if(i%2===0) string += a[i].toUpperCase();
            else string += a[i].toLowerCase();
        }
        answer.push(string)
    }
    
    return answer.join(" ");
}