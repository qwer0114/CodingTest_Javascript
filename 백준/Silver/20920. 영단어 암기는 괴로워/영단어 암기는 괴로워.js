let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
	let [N,M] = [input[0].split(' ')[0],input[0].split(' ')[1]]
    input.shift();
    
    let arr = input.filter((el)=>{ // [1]
      if(el.length >= parseInt(M)) return el;
    }).sort().sort((a,b)=>b.length - a.length)

    let map = new Map()
    for(let x of arr){ //[2]
      if(map.has(x)) map.set(x,map.get(x)+1)
      else map.set(x,1)  
    }
    
    let sortArr = [...map].sort((a,b)=>b[1]-a[1]) //[3]
    
    let sortTmp = []
    for(let x of sortArr){
      sortTmp.push(x[0]) //[4]
    }
    
    console.log(sortTmp.join('\n'))