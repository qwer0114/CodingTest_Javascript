
function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    let bigCity = [];
    cities.map((city)=>{
        bigCity.push(city.toLowerCase()); 
    })
    bigCity.map((city)=>{
         if(cacheSize === 0) {  
            answer += 5;
            return;
        }
        
        if(cache.length!==cacheSize){
            if(cache.includes(city)) cacheHit(cache, city)
            else if(!cache.includes(city)){
                 cache.unshift(city)
                  answer+=5;
            }
        }else{
              if(cache.includes(city)) cacheHit(cache, city, answer)
              else if(!cache.includes(city))cacheMiss(cache, city) 
        }
    })
 
   
    return answer;
    
    
    function cacheHit(cache, city){
    let index = cache.indexOf(city);
    cache.splice(index,1)
    cache.unshift(city);
    answer+=1;
            
}

function cacheMiss(cache, city){
     cache.pop();
     cache.unshift(city);
     answer+=5;
}

}



