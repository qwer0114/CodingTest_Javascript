function makeCombination(menus){
    let result = [];
    let visited = new Set();
    function dfs(menu,combi,start){
        combi+=menu;
        if(combi.length>1){
            result.push(combi.split("").sort().join(""))
        }
        
        for(let i = start; i<menus.length; i++){
            if(!visited.has(menus[i])){
                visited.add(menus[i])
                dfs(menus[i],combi,i+1)
                visited.delete(menus[i])
            }
        }
    }
     dfs("","",0)
    
    return result
}


function solution(orders, course) {
    var answer = [];
    let combiCandidate = {}
 
    
    for(let order of orders){
        let orderArray = order.split("")
        const combination = makeCombination(orderArray);
        for(let i = 0; i<combination.length; i++){
            let combi = combiCandidate[combination[i]];
            if(!combi) combiCandidate[combination[i]] = 1;
            else combiCandidate[combination[i]] = combi+1
        }
    }

    let filterCombi = Object.entries(combiCandidate).filter(([combi,count])=>count!==1)

    for(let c of course){
        let max = 0;
        let filter = filterCombi.filter(([combi,count])=>combi.length === c)
        for(let i = 0; i<filter.length; i++){
            max = Math.max(max,filter[i][1])
        }
       let maxFilter = filter.filter(([combi,count])=>count===max)
        
        for(let [menu,count] of maxFilter){
            answer.push(menu)
        }
    }
    
   answer = answer.sort()
    return answer
}