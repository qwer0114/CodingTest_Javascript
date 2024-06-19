function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridge = [];
    let bridgeWeight = 0;

    while (truck_weights.length > 0 || bridge.length > 0) {
        answer++;

        // 다리 위의 트럭들을 한 칸씩 이동시키고, 도착한 트럭을 제거
        if (bridge.length > 0 && bridge[0].time === answer) {
            bridgeWeight -= bridge.shift().weight;
        }

        // 새로운 트럭을 다리에 추가
        if (truck_weights.length > 0 && bridgeWeight + truck_weights[0] <= weight) {
            let truckWeight = truck_weights.shift();
            bridge.push({ weight: truckWeight, time: answer + bridge_length });
            bridgeWeight += truckWeight;
        }
    }

    return answer;
}