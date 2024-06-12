function solution(seaLevel, rainRecord) {
    // 물의 양 map
    let map = new Map();
    // 3일동안 비온 집
    let set = new Set();
    let answer = [];
    for (let i = 0; i < seaLevel.length; i++) {
        map.set(i, 0);
    }
    for (let i = 0; i < rainRecord.length; i++) {
        let record = rainRecord[i].split(" ");
        let startHouse = Number(record[0]) - 1;
        let endHouse = Number(record[1]) - 1;
        for (let k = startHouse; k <= endHouse; k++) {
            map.set(k, map.get(k) + 1);
            set.add(k);
        }
        if ((i + 1) % 3 === 0) {
            let houses = [...set.values()];
            for (let j = 0; j < houses.length; j++) {
                map.set(houses[j], map.get(houses[j]) - 1);
            }
            set = new Set();
        }
    }
    let water = [...map.values()];
    for (let i = 0; i < seaLevel.length; i++) {
        answer.push(Number(water[i]) + Number(seaLevel[i]));
    }
    console.log(answer.join(" "));
}

const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });

    let rainyDay = 0;
    let house = 0;
    let seaLevel = [];
    let rainRecord = [];
    for await (const line of rl) {
        if (!rainyDay && !house) {
            let setting = line.split(" ");
            house = Number(setting[0]);
            rainyDay = Number(setting[1]);
            continue;
        } else if (!seaLevel.length) {
            seaLevel = line.split(" ").map(Number);
            continue;
        } else {
            rainRecord.push(line);
        }
        if (rainRecord.length === rainyDay) {
            rl.close();
        }
    }
    solution(seaLevel, rainRecord);

    process.exit();
})();