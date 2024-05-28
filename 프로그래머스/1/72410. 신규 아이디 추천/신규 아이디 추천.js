function solution(new_id) {
    var answer = '';
    let special = "~!@#$%^&*()=+[{]}:?,<>/"
    special = special.split("")
    new_id = new_id.toLowerCase().split("");
    new_id = new_id.filter((id)=>!special.includes(id)).join("");
    while(new_id.includes("..")) {
        new_id = new_id.replace("..", "."); 
    }
    new_id = new_id.split("")
    if(new_id[0]===".")new_id[0]="";
    new_id = new_id.join("")
    if (new_id === "") {
        new_id = 'a';
    }
    new_id = new_id.split("")
   
    while(new_id.length>=16){
        new_id.pop();
    }
    while(new_id[new_id.length-1]==="."){
        new_id.pop();
    }
    while(new_id.length<3){
        new_id.push(new_id[new_id.length-1])
    }
    answer = new_id.join("")
    return answer;
}