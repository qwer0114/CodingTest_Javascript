function solution(keymap, targets) {
            var answer = [];
            let map = new Map();
            let sum =0;
            keymap.map((t,i)=>{
                for(let i=0; i<t.length; i++){
                    if(map.has(t[i])) map.get(t[i]) > i ? map.set(t[i],i+1) : null
                    else map.set(t[i],i+1)
                }
            })
            
            for(let a of targets){
                sum = 0;
                for(let j=0; j<a.length; j++){
                    if(!map.has(a[j])){
                        answer.push(-1);
                        sum  = 0;
                        break;
                    }
                    else sum = sum + map.get(a[j])
                }
                if(sum!=0)answer.push(sum);
            }
            return answer;
}