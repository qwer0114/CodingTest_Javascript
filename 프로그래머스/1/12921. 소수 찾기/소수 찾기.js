function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n) {
    let answer = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            answer++;
        }
    }
    return answer;
}