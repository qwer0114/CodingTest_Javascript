const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = parseInt(input);

function solution(N) {
    if (N === 1) return 0;
    
    // visited를 배열로 변경 (Set 대신)
    const visited = new Array(N + 1).fill(false);
    visited[N] = true;
    
    let queue = [[N, 0]];  // 현재 레벨
    
    while (queue.length) {
        const nextQueue = [];  // 다음 레벨
        
        for (const [num, count] of queue) {
            // 3으로 나누기
            if (num % 3 === 0) {
                const next = num / 3;
                if (next === 1) return count + 1;
                if (!visited[next]) {
                    visited[next] = true;
                    nextQueue.push([next, count + 1]);
                }
            }
            
            // 2로 나누기
            if (num % 2 === 0) {
                const next = num / 2;
                if (next === 1) return count + 1;
                if (!visited[next]) {
                    visited[next] = true;
                    nextQueue.push([next, count + 1]);
                }
            }
            
            // 1 빼기
            const next = num - 1;
            if (next === 1) return count + 1;
            if (!visited[next]) {
                visited[next] = true;
                nextQueue.push([next, count + 1]);
            }
        }
        
        queue = nextQueue;  // 다음 레벨로 업데이트
    }
}

console.log(solution(N));