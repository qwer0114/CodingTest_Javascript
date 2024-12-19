let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
input.shift();
input = input.map((i, index) => i.split(" "));
// 나이를 숫자로 변환
input = input.map((item, index) => [Number(item[0]), item[1], index]);

function sort(input) {
  let answer = input.sort((a, b) => {
    if (a[0] === b[0]) {
      // 나이가 같으면 가입한 순서대로
      return a[2] - b[2];
    }
    // 나이 순으로 정렬
    return a[0] - b[0];
  });
  return answer;
}

console.log(
  sort(input)
    .map((i) => {
      return `${i[0]} ${i[1]}`;
    })
    .join("\n")
);
