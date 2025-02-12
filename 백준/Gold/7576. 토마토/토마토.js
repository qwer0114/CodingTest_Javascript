const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));

const [M, N] = input.shift().map(Number);
const map = input.map((i) => i.map(Number));

function solution(M, N, map) {
    const queue = [];
    let unripeTomatoes = 0;  // 익지 않은 토마토 개수
    
    // 초기 상태 확인
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(map[i][j] === 1) {
                queue.push([i, j, 0]);
            } else if(map[i][j] === 0) {
                unripeTomatoes++;
            }
        }
    }
    
    // 처음부터 모든 토마토가 익어있는 경우
    if(unripeTomatoes === 0) return 0;
    
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let maxDays = 0;
    let index = 0;  // queue.shift() 대신 인덱스 사용
    
    while(index < queue.length) {
        const [x, y, day] = queue[index++];
        maxDays = day;
        
        for(let [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            if(nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] === 0) {
                map[nx][ny] = 1;
                queue.push([nx, ny, day + 1]);
                unripeTomatoes--;
            }
        }
    }
    
    // 익지 않은 토마토가 남아있는 경우
    return unripeTomatoes > 0 ? -1 : maxDays;
}

console.log(solution(M, N, map));