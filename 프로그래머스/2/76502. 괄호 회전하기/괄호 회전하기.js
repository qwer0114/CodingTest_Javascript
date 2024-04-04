function solution(s) {
    let answer = 0;

    // 1) 
    // 7)
    for(let i=0; i<s.length; i++) {
        // 6)
        let stack = [];

        // 2)
        for(let j=0; j<s.length; j++) {
            // 3)
            if(s[j] == ')' && stack[stack.length-1] == '(' 
               || s[j] == ']' && stack[stack.length-1] == '[' 
               || s[j] == '}' && stack[stack.length-1] == '{') {
                stack.pop();
            } else {
                stack.push(s[j]);
            }
        }

        // 4)
        if(stack.length == 0) {
            answer += 1;
        }

        // 5)
        s = s.slice(1) + s[0];
    }

    return answer;
}