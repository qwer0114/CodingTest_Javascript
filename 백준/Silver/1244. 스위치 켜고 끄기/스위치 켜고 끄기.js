const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line
  .trim()
  .split("\n")
  .map((i) => i.replace("\r", ""));

let switches = input[1].split(" ");
let students = input.splice(3);

for (let i = 0; i < students.length; i++) {
  let info = students[i].split(" ");
  let gender = info[0];
  let number = Number(info[1]);
  if (gender === "1") {
    male(number);
  } else if (gender === "2") {
    female(number);
  }
}

function male(number) {
  let count = 1;
  while (number * count <= switches.length) {
    switches[number * count - 1] = convert(switches[number * count - 1]);
    count += 1;
  }
}

function female(number) {
  let boolean = true;
  switches[number - 1] = convert(switches[number - 1]);
  let i = 1;
  while (boolean) {
    if (switches[number - 1 - i] === switches[number - 1 + i]) {
      switches[number - 1 - i] = convert(switches[number - 1 - i]);
      switches[number - 1 + i] = convert(switches[number - 1 + i]);
      i += 1;
    } else {
      boolean = false;
    }
  }
}

function convert(target) {
  if (target === "1") {
    return "0";
  } else if (target === "0") {
    return "1";
  }
}
let result = [];
while (switches.length > 0) {
  result.push(switches.splice(0, 20).join(" "));
}
console.log(result.join("\n"));
