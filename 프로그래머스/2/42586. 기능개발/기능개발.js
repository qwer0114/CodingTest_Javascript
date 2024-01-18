function solution(progresses, speeds) {
    const answer = [];
    const daysNeeded = [];

    // 각 작업이 완료되기까지 필요한 일수 계산
    for (let i = 0; i < progresses.length; i++) {
        const days = Math.ceil((100 - progresses[i]) / speeds[i]);
        daysNeeded.push(days);
    }

    while (daysNeeded.length > 0) {
        // 첫 번째 작업이 완료되었다면, 그와 함께 배포할 작업들을 찾아서 제거
        const completeDay = daysNeeded.shift();
        let count = 1;

        // 현재 완료된 작업과 동시에 배포 가능한 작업 찾기
        while (daysNeeded.length > 0 && daysNeeded[0] <= completeDay) {
            daysNeeded.shift();
            count++;
        }

        answer.push(count);
    }

    return answer;
}
