function solution(num) {
    const working = (num,loopCount)=>{
        if(num === 1)
            return loopCount
        const calculateNumber = num % 2 === 0 ? num / 2 : num * 3 + 1
        return working(calculateNumber,loopCount+1)
    }

    const loopCount = working(num,0) 
    const answer = loopCount < 500 ? loopCount : -1
    return answer;
}