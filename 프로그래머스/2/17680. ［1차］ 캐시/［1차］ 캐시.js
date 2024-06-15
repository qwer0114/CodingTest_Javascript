
function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    cities = cities.map((c)=>c.toUpperCase())
    
    for(let i =0; i<cities.length; i++){
       if(cache.includes(cities[i])){
           let index = cache.indexOf(cities[i])
           cache.splice(index,1)
           cache.push(cities[i])
           answer+=1
       }else{
           if(cache.length<cacheSize){
               cache.push(cities[i])
           }else{
               if(cacheSize!==0){
                    cache.shift()
                    cache.push(cities[i])
               }
              
           }
           answer+=5;
       }
    }
    return answer
}



