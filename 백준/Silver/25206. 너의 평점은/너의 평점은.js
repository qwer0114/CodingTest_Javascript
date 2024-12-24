let fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r/g, ""));

function solution(input) {
  let gradeMap = createGradeMap();
  let creditSum = 0;
  let totalSum = 0;

  input = input.map((i) => i.split(" "));
  input.forEach((element) => {
    let [_subject, credit, grade] = element;
    if (grade === "P") return;
    creditSum += Number(credit);
    totalSum += Number(credit) * gradeMap.get(grade);
  });

  return totalSum / creditSum;
}

function createGradeMap() {
  let gradeMap = new Map();
  gradeMap.set("A+", 4.5);
  gradeMap.set("A0", 4.0);
  gradeMap.set("B+", 3.5);
  gradeMap.set("B0", 3.0);
  gradeMap.set("C+", 2.5);
  gradeMap.set("C0", 2.0);
  gradeMap.set("D+", 1.5);
  gradeMap.set("D0", 1.0);
  gradeMap.set("F", 0.0);
  return gradeMap;
}

console.log(solution(input));
