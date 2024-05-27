function solution(ingredient) {
    var stack = [];
    var answer = 0;

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        if (stack.length >= 4) {
            let len = stack.length;
            if (stack[len - 4] === 1 && stack[len - 3] === 2 && stack[len - 2] === 3 && stack[len - 1] === 1) {
                stack.splice(len - 4, 4);
                answer += 1;
            }
        }
    }

    return answer;
}