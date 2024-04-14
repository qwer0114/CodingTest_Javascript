function solution(N, stages) {
    var answer = [];
    let map = new Map();
    let length = stages.length;
    for(let i =1; i<=N; i++){
        let users_in_stage = stages.filter((s) => s === i).length;
        if (length === 0) { // 분모가 0이 되는 경우를 방지하기 위한 예외 처리
            map.set(i, 0);
        } else {
            map.set(i, users_in_stage / length);
            length -= users_in_stage; // 현재 스테이지에 머물러 있는 사용자 수만큼 전체 사용자 수에서 감소
        }
    }
    [...map].sort((a, b) => b[1] - a[1] || a[0] - b[0]).forEach((m) => answer.push(m[0]));
    
    return answer;
}