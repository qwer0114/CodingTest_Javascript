const readline = require('readline');
          (async () => {
        
        
          
          	let rl = readline.createInterface({ input: process.stdin });
        
        
          
          	
        
        
          
          	for await (const line of rl) {
        
        
          
          		rl.close();
        
        
          
          		console.log(solution(line.trim().split(' ').map((v) => +v)));
        
        
          
          	}
        
        
          
          	
        
        
          
          	process.exit();
        
        
          
          })();
        
        
          
          

        
        
          
          function solution(arr) {
        
        
          
          	arr.sort((a, b) => a - b);
        
        
          
          	return arr[3] - arr[0] + arr[2] - arr[1];
        
        
          
          }
