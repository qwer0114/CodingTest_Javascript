 function solution(board, moves){
                let answer=0;
                let y = 0;
                let stack=[];
                let stack2 = [];
                
                for(let i=0; i<moves.length; i++){
                    y=0;
                    while(board[y][moves[i]-1] === 0 && y<board.length-1){
                        y++;
                    }
                    if(board[y][moves[i]-1]!== 0)stack.push(board[y][moves[i]-1]);
                    board[y][moves[i]-1] = 0;
             }
               
                for(let a of stack){
                    if(stack2[stack2.length-1] === a){
                        console.log(stack2[stack2.length-1])
                         stack2.pop();
                    }else{
                        stack2.push(a);
                    }
                    
                }
              
                answer = stack.length - stack2.length;
                return answer;
            }