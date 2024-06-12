function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    const ARepresentative = findRepresentative(A);
    const BRepresentative = findRepresentative(B);

    let answer = [`${ARepresentative} ${BRepresentative}`];
    answer.push(ARepresentative > BRepresentative ? "good" : "bad");

    console.log(answer.join("\n"));
}

function findRepresentative(arr) {
    let n = arr.length;
    let maxCount = 0;
    let representative = 0;
    let left = 0;

    for (let right = 0; right < n; right++) {
        while (arr[right] - arr[left] > 4) {
            left++;
        }
        let count = right - left + 1;
        if (count > maxCount) {
            maxCount = count;
            // Representative is the middle point of the range
            representative = Math.floor((arr[left] + arr[right]) / 2);
        }
    }

    return representative;
}

const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    let N = 0;
    let mouseCount = 0;
    let A = null;
    let B = null;
    for await (const line of rl) {
        if (!mouseCount) {
            mouseCount = Number(line);
        } else if (!A) {
            A = line.split(" ").map((a) => Number(a));
            N += 1;
            continue;
        } else {
            B = line.split(" ").map((b) => Number(b));
            N += 1;
        }
        if (N === 2) {
            rl.close();
        }
    }
    solution(A, B);
    process.exit();
})();