const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [N, K] = input[0].map(Number);

function solution(N, K) {
    // 시작점과 도착점이 같은 경우
    if (N === K) return 0;
    
    // 방문 배열 (Set 대신 배열 사용)
    const visited = Array(100001).fill(false);
    // 0초 이동을 먼저 처리하기 위해 두 개의 큐 사용
    const queue = [[N, 0]];
    let index = 0;
    
    visited[N] = true;
    
    while (index < queue.length) {
        const [pos, time] = queue[index++];
        
        // 순간이동 (0초) - 우선 처리
        if (pos * 2 <= 100000 && !visited[pos * 2]) {
            if (pos * 2 === K) return time;
            visited[pos * 2] = true;
            // 0초 이동은 큐의 앞쪽에 추가 (우선순위)
            queue.splice(index, 0, [pos * 2, time]);
        }
        
        // 걷기 (1초)
        for (const next of [pos - 1, pos + 1]) {
            if (next >= 0 && next <= 100000 && !visited[next]) {
                if (next === K) return time + 1;
                visited[next] = true;
                queue.push([next, time + 1]);
            }
        }
    }
}

console.log(solution(N, K));