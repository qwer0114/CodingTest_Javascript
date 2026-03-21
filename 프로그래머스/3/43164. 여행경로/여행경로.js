function solution(tickets) {
  let answer = [];
  let graph = {};

  for (let [start, end] of tickets) {
    if (!graph[start]) graph[start] = [];
    graph[start].push(end);
  }


  for (let key in graph) {
    graph[key].sort();
  }

  function dfs(node, path) {
    if (path.length === tickets.length + 1) {
      answer = [...path];
      return true;
    }

    const nexts = graph[node];
    if (!nexts || nexts.length === 0) return false;

    for (let i = 0; i < nexts.length; i++) {
      const next = nexts[i];
      nexts.splice(i, 1); 
      path.push(next);
      if (dfs(next, path)) return true;  
      nexts.splice(i, 0, next);
      path.pop();
    }

    return false;
  }

  dfs("ICN", ["ICN"]);
  return answer;
}