function solution(n, left, right) {
    let answer = [];
    
    for (let i = left; i <= right; i++) {
        let row = Math.floor(i / n); // 현재 숫자가 몇 번째 행에 속하는지 계산
        let col = i % n; // 현재 숫자가 해당 행에서 몇 번째 열에 속하는지 계산
        let num = Math.max(row, col) + 1; // 해당 위치의 숫자 계산
        answer.push(num);
    }
    
    return answer;
}