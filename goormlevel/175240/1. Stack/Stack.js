function solution(cases,stackSize){
	let stack = [];
	for(let i =0; i<cases.length; i++){
		let c = cases[i].split(" ")
		if(c[0]==="push"){
			push(c[1])
		}else{
			pop()
		}
	}
	
	function push(c){
		if(stack.length<stackSize){
					stack.push(c)
		}else{
			console.log("Overflow")
		}
	}
	function pop(){
		if(stack.length>0){
					console.log(stack.pop())
		}else{
			console.log("Underflow")
		}
	}
}


const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null;
	let stackSize = 0;
	let cases = [];
	for await (const line of rl) {
		if(!N){
			let initial = line.split(" ")
			N = initial[0]
			stackSize = initial[1]
		}else{
			cases.push(line);
		}
		if(cases.length === N){
			rl.close();
		}
		
	}
	solution(cases,stackSize)
	process.exit();
})();
