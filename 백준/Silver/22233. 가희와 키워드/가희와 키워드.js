const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line
  .trim()
  .split("\n")
  .map((i) => i.replace("\r", ""));
let keywordNumber = input[0].split(" ");
input.shift();
let keywords = input.splice(0, keywordNumber[0]);
let memoWords = input;
let map = new Map();
keywords.map((k) => {
  map.set(k, "");
});
let answer = [];
for (let i = 0; i < memoWords.length; i++) {
  let words = memoWords[i].split(",");
  for (let i = 0; i < words.length; i++) {
    map.delete(words[i]);
  }
  answer.push(map.size);
}
console.log(answer.join("\n"));
