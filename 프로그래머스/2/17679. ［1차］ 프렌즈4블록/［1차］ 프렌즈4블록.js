function solution(m, n, board) {
    var answer = 0;
    board = board.map((b) => b.split(""));
    
    while (true) {
        let remove = [];
        
        // 2x2 블록 찾기
        for (let x = 0; x < board.length - 1; x++) {
            for (let y = 0; y < board[x].length - 1; y++) {
                if (board[x][y] && board[x][y] === board[x+1][y] && board[x][y] === board[x][y+1] 
                    && board[x][y] === board[x+1][y+1]) {
                    remove.push([x, y]);
                }
            }
        }

        // 제거할 블록이 없다면 종료
        if (remove.length === 0) break;

        // 블록 제거
        for (let i = 0; i < remove.length; i++) {
            let x = remove[i][0];
            let y = remove[i][1];
            if (board[x][y] !== null) answer++;
            if (board[x+1][y] !== null) answer++;
            if (board[x][y+1] !== null) answer++;
            if (board[x+1][y+1] !== null) answer++;

            board[x][y] = null;
            board[x+1][y] = null;
            board[x][y+1] = null;
            board[x+1][y+1] = null;
        }

        // 블록 떨어뜨리기
        for (let y = 0; y < n; y++) {
            let empty = m - 1;
            for (let x = m - 1; x >= 0; x--) {
                if (board[x][y] !== null) {
                    board[empty][y] = board[x][y];
                    if (empty !== x) board[x][y] = null;
                    empty--;
                }
            }
        }
    }

    return answer;
}