function solution(n, m) {
    let maxDivideNum
    for(let i=1;i<=Math.min(n,m);i++){
        if(Math.max(n,m) % i === 0 && Math.min(n,m) % i === 0)
            maxDivideNum = i
    }

    const answer = [maxDivideNum , n * m / maxDivideNum]
    return answer
}