function solution(cacheSize, cities) {
    let executionTime = 0;
    let cache = [];

    // 도시 이름을 대문자로 변환
    cities = cities.map(city => city.toUpperCase());

    cities.forEach(city => {
        if (cache.includes(city)) {
            // 캐시 히트
            cache.splice(cache.indexOf(city), 1);
            executionTime += 1;
        } else {
            // 캐시 미스
            if (cache.length >= cacheSize && cacheSize > 0) {
                cache.shift();
            }
            executionTime += 5;
        }

        if (cacheSize > 0) {
            cache.push(city);
        }
    });

    return executionTime;
}