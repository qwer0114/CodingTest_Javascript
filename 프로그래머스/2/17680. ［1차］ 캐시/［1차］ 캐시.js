
function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    cities = cities.map((city)=>city.toUpperCase())
    
    for(let i = 0; i<cities.length; i++){
        // cache hit
        if(cache.includes(cities[i])){
            answer+=1;
            cache.splice(cache.indexOf(cities[i]),1)
            cache.push(cities[i])
        }else{
            answer+=5;
            if(cache.length===cacheSize)cache.shift()
            if(cache.length<cacheSize)cache.push(cities[i])
        }
    }
    return answer
}



