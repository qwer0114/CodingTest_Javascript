function solution(phone_book) {
    var answer = true;
    var map = new Map();
    phone_book = phone_book.sort();

    for (let p of phone_book) {
        // 현재 전화번호의 모든 접두사를 확인
        for (let i = 1; i < p.length; i++) {
            if (map.has(p.substring(0, i))) {
                answer = false;
                break;
            }
        }
        if (!answer) {
            break;
        }
        map.set(p);
    }

    return answer;
}
