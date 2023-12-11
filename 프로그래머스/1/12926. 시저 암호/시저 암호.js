function solution(s, n) {
    var answer = '';
    let string = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let index;
    let isbig = false;
    for(let a of s){
        isbig = false;
        if(a === a.toUpperCase()){
           index = string.indexOf(a.toLowerCase())
            isbig = true;
        }else{
            index = string.indexOf(a)
        }
        
        if(index+n > 25){
           isbig ? answer += string[index+n-1-25].toUpperCase(): answer+= string[index+n-1-25]
        }else if(a === " "){
            answer += " "
        }
        else{
             isbig ? answer += string[index+n].toUpperCase(): answer+= string[index+n]
        }
        
    }
    
    
    return answer;
}