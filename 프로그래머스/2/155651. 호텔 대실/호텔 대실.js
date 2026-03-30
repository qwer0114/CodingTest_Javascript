// 방이 필요한 조건은 시간이 겹칠 때
// 

function solution(book_time) {
    var answer = 0;
    let rooms = [];
    const toMin = (t) => {
        const [h, m] = t.split(":").map(Number);
        return h * 60 + m;
    };
    
     const books = book_time
        .map(([s, e]) => [toMin(s), toMin(e)])
        .sort((a, b) => a[0] - b[0]);
    
    for(let [start,end] of books){
        rooms.sort((a,b)=>a-b);
        
        if(rooms.length>0 && rooms[0] + 10 <= start){
            rooms[0] = end;
        }else{
            rooms.push(end);
        }
    }
    
    return rooms.length;
}