function solution(number, k) {
    let stack = [];
    let len = number.length;
    
    for (let i = 0; i < len; i++) {
        let current = number[i];
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < current) {
            stack.pop();
            k--;
        }
        stack.push(current);
    }
   
    // 만약 k가 남아있다면 뒤에서부터 제거
    stack.splice(stack.length - k, k);
    
    return stack.join('');
}