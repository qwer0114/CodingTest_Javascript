function solution(queue1, queue2) {
    let totalSum = queue1.reduce((acc, cur) => acc + cur, 0) + queue2.reduce((acc, cur) => acc + cur, 0);
    if (totalSum % 2 !== 0) return -1;

    let goal = totalSum / 2;
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let queue = [...queue1, ...queue2];
    let len = queue.length;
    let left = 0, right = queue1.length;
    let answer = 0;

    while (left <= right && right < len) {
        if (sum1 === goal) {
            return answer;
        } else if (sum1 < goal) {
            sum1 += queue[right];
            right++;
        } else {
            sum1 -= queue[left];
            left++;
        }
        answer++;
    }

    return -1;
}