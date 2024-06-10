function solution(msg) {
  var answer = [];
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
    
    let map = new Map();
    alphabet.map((alpha,i)=>map.set(alpha,i+1))
    let i = 0;
    while (i < msg.length) {
        let l = 1;
        let string = msg.substr(i, l);
        
        while (map.has(string) && i + l <= msg.length) {
            l++;
            string = msg.substr(i, l);
        }

        // 마지막에 증가된 l을 줄여서 사전에 있는 문자열을 다시 얻는다
        l--;
        string = msg.substr(i, l);

        // 사전에 있는 문자열의 인덱스를 추가
        answer.push(map.get(string));

        // 사전에 새로운 문자열을 추가
     
            map.set(msg.substr(i, l + 1), map.size + 1);
       

        // i를 업데이트하여 처리된 문자열의 다음으로 이동
        i += l;
    }
   
    return answer;
}
   
   


