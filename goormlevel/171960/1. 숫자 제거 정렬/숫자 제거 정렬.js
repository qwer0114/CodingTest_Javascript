
function solution(N,data){
	let set = new Set(data)
	let db = [...set].sort((a,b)=>a-b)
	console.log(db.join(" "))
}

const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null;
	let data = [];
	let line = 1;
	let count = 0;
	for await (const line of rl) {
		 if(!N){
			 N = +line
		 }else{
			 data = line.split(" ").map((n)=>Number(n));
			 count++;
		 }
		if(count === N){
			rl.close()
		}
	}
	solution(N,data)
	
	process.exit();
})();
