function solution(s) {
    var answer ="";
    let str= "";
    let map = new Map();
    map.set("zero",0);
    map.set("one",1);
    map.set("two",2);
    map.set("three",3);
    map.set("four",4);
    map.set("five",5);
    map.set("six",6);
    map.set("seven",7);
    map.set("eight",8);
    map.set("nine",9);
    
    for(let a of s){
        if(isNaN(a)){
            str += a;
            if(map.has(str)){
                answer += map.get(str);
                str = "";
            }
        }else{
            answer += a
        }
    }
    return +answer;
}