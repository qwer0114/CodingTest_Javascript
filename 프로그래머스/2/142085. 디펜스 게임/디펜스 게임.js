function solution(n, k, enemy) {
    const heap = [];

    const push = (val) => {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (heap[parent] <= heap[i]) break;
            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }
    };

    const pop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            while (true) {
                let smallest = i;
                const l = 2 * i + 1;
                const r = 2 * i + 2;
                if (l < heap.length && heap[l] < heap[smallest]) smallest = l;
                if (r < heap.length && heap[r] < heap[smallest]) smallest = r;
                if (smallest === i) break;
                [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                i = smallest;
            }
        }
        return top;
    };

    let sum = 0;

    for (let i = 0; i < enemy.length; i++) {
        push(enemy[i]);

        if (heap.length > k) {
            sum += pop(); 
        }

        if (sum > n) return i;
    }

    return enemy.length;
}