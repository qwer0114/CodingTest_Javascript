function solution(m, n, puddles) {
    let dp = Array(n+1).fill().map(()=>Array(m+1).fill(0))
    dp[1][1] = 1;
    
    for(let [x,y] of puddles){
        dp[y][x] = -1;
    }
    
    for(let i = 1; i<=n; i++){
        for(let j = 1; j<=m; j++){
           if ((i === 1 && j === 1) || dp[i][j] === -1) continue;
            
            const up = dp[i-1][j] === -1 ? 0 : dp[i-1][j];
            const left = dp[i][j-1] === -1 ? 0 : dp[i][j-1];
            dp[i][j] = (up + left) % 1000000007;
        }
    }
   
    return dp[n][m]% 1000000007;
}