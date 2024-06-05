function solution(genres, plays) {
    var answer = [];
    // 장르별 플레이 횟수 기록
    let map = new Map();
    // 장르별 노래 기록
    let map2 = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        if (!map.has(genres[i])) {
            map.set(genres[i], 0);
            map2.set(genres[i], []);
        }
        map.set(genres[i], map.get(genres[i]) + plays[i]);
        map2.get(genres[i]).push([i, plays[i]]);
    }
    
    // 장르별 총 재생 횟수에 따라 정렬
    map = new Map([...map].sort((a, b) => b[1] - a[1]));
    
    // 노래별 재생 횟수 정렬된 장르들
    let keys = [...map.keys()];
    for (let i = 0; i < keys.length; i++) {
        let array = map2.get(keys[i]).sort((a, b) => {
            if (b[1] === a[1]) {
                return a[0] - b[0];
            } else {
                return b[1] - a[1];
            }
        });
        
        if (array.length === 1) {
            answer.push(array[0][0]);
        } else {
            for (let k = 0; k < 2; k++) {
                answer.push(array[k][0]);
            }
        }
    }
    
    return answer;
}