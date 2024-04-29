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
  alphabet.map((a, i) => map.set(a, i + 1));
  let end = 1;
  let start = 0;
  let prevstring = "";

  while (msg !== "") {
    let substring = msg.slice(start, end);
   if (map.has(msg)) {
      answer.push(map.get(msg));
      msg = msg.replace(msg, "");
    }
    if (map.has(substring)) {
      prevstring = substring;
      end++;
      continue;
    } else {
      map.set(substring, map.size + 1);
      answer.push(map.get(prevstring));
      msg = msg.replace(prevstring, "");
      end = 1;
    }
  
  }
    return answer
}

