class MinHeap {
    constructor() { this.heap = []; }
    
    push(val){
        this.heap.push(val);
        let i = this.heap.length-1;
        
        while(i>0){
            const p = Math.floor((i-1)/2);
            if(this.heap[p] <= this.heap[i]) break;
            [this.heap[p],this.heap[i]] =  [this.heap[i],this.heap[p]] 
            i = p;
        }
    }

pop() {
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      let i = 0;
      while (true) {
        let s = i;
        const l = 2*i+1, r = 2*i+2;
        if (l < this.heap.length && this.heap[l] < this.heap[s]) s = l;
        if (r < this.heap.length && this.heap[r] < this.heap[s]) s = r;
        if (s === i) break;
        [this.heap[s], this.heap[i]] = [this.heap[i], this.heap[s]];
        i = s;
      }
    }
    return top;
  }

  peek() { return this.heap[0]; }
  get size() { return this.heap.length; }

}

function solution(scoville, K) {
  const heap = new MinHeap();
  for (const s of scoville) heap.push(s);

  let count = 0;

  while (heap.peek() < K) {
    if (heap.size < 2) return -1;  // 섞을 음식이 없음

    const first = heap.pop();
    const second = heap.pop();
    heap.push(first + second * 2);
    count++;
  }

  return count;
}