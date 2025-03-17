const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.split(" "));
const [N] = input.shift().map(Number);
const [M] = input.shift().map(Number);
const routes = input;

function solution(N, M, routes) {
  let answer = Infinity;
  const [start, target] = routes.pop().map(Number);
  const graph = Array(N + 1)
    .fill()
    .map(() => []);

  for (let i = 0; i < routes.length; i++) {
    let [start, end, cost] = routes[i].map(Number);
    graph[start].push([end, cost]);
  }

  const distance = Array(N + 1).fill(Infinity);
  distance[start] = 0;

  const queue = [[start, 0]];

  while (queue.length > 0) {
    const [current, currentCost] = queue.shift();

    if (distance[current] < currentCost) continue;

    for (const [next, nextCost] of graph[current]) {
      const cost = currentCost + nextCost;

      if (cost < distance[next]) {
        distance[next] = cost;
        queue.push([next, cost]);
      }
    }
  }

  return distance[target];
}

console.log(solution(N, M, routes));
