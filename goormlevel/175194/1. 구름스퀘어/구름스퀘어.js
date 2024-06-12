function solution(meetings){
	meetings = meetings.sort((a,b)=>(a[1]-b[1]))
	let answer = 0;
	let endTime = Number(meetings[0][1])
	for(let i = 0; i<meetings.length; i++){
			if(i===0)answer+=1;
			if(Number(meetings[i][0])>=endTime+1){
				answer+=1;
				endTime = Number(meetings[i][1])
			}
	}
	console.log(answer)
}
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null;
	let meetings = [];
	
	for await (const line of rl) {
		if(!N){
			N = Number(line)
		}else{
			meetings.push(line.split(" "))
		}
		if(N === meetings.length){
			rl.close()
		}
	}
	solution(meetings)
	
	process.exit();
})();
