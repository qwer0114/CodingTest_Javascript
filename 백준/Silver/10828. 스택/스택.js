const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
    }
   
    pop() {
        return this.items.length === 0 ? -1 : this.items.pop();
    }
    
    size() {
        return this.items.length;
    }
    

    empty() {
        return this.items.length === 0 ? 1 : 0;
    }

    top() {
        return this.items.length === 0 ? -1 : this.items[this.items.length - 1];
    }
}

function solution(input) {
    const n = parseInt(input[0]);
    const stack = new Stack();
    const result = [];
    
    for(let i = 1; i <= n; i++) {
        const command = input[i].split(' ');
        
        switch(command[0]) {
            case 'push':
                stack.push(parseInt(command[1]));
                break;
            case 'pop':
                result.push(stack.pop());
                break;
            case 'size':
                result.push(stack.size());
                break;
            case 'empty':
                result.push(stack.empty());
                break;
            case 'top':
                result.push(stack.top());
                break;
        }
    }
    
    return result.join('\n');
}

console.log(solution(input));