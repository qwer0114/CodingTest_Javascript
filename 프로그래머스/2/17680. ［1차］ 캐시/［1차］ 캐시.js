function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];
  cities = cities.map((city) => city.toUpperCase());

  for (let city of cities) {
    const idx = cache.indexOf(city);
    const cacheHit = idx !== -1;

    if (cacheHit) {
      answer += 1;
      cache.splice(idx, 1);      
      cache.push(city);          
    } else {
      answer += 5;
      if (cache.length >= cacheSize) {
        cache.shift();           
      }
      if (cacheSize > 0) {
        cache.push(city);
      }
    }
  }

  return answer;
}