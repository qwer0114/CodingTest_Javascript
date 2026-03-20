function solution(word) {
    let answer = 0;
    const alphabets = ["A","E","I","O","U"];
    let found = false;

    function dfs(string) {
        if (found) return;
        if (string.length > 0) answer++;
        if (string === word) { found = true; return; }
        if (string.length === 5) return;

        for (let a of alphabets) {
            dfs(string + a);
        }
    }

    dfs("");
    return answer;
}