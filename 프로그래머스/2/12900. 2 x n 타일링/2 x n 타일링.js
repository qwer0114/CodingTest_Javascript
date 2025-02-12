function solution(n) {
    var answer = 0;
    const dp = [];
    dp[1] = 1;
    dp[2] = 2; 
    
    for(let i = 3; i<=n; i++){
        dp[i] = (dp[i-2]+dp[i-1])%1000000007
    }
    return dp[n];
}