function solution(k, dungeons) {
    let answer = 0;
    let visited = Array(dungeons.length).fill(false);
    
    function dfs(fatigue, count) {
        answer = Math.max(answer, count); 
        
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && fatigue >= dungeons[i][0]) {
                visited[i] = true;
                dfs(fatigue - dungeons[i][1], count + 1);
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0);
    return answer;
}