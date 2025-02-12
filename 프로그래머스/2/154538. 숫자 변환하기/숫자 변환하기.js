function solution(x, y, n) {
    const queue = [[x,0]];
    let index = 0;
    const visited = new Set([x])
    
    while(queue.length>index){
        const [current,count] = queue[index++];
        if(current === y) return count;
        for(let nx of [current+n,current*2,current*3]){
            if(nx<=y && !visited.has(nx)){
                queue.push([nx,count+1])
                visited.add(nx)
            }
        }
    }
    return -1
   
}