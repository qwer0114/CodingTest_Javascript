const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);  
const M = Number(input[1]);  
const graph = Array(N + 1).fill().map(() => []);
const visited = new Set();


for(let i = 2; i < M + 2; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

function dfs(v) {
    visited.add(v);
    
    for(let next of graph[v]) {
        if(!visited.has(next)) {
            dfs(next);
        }
    }
}

dfs(1);
console.log(visited.size - 1);