function solution(bandage, health, attacks) {
    // bandage -> [heal 주기, 기본 회복량, 추가 회복량]
    // health -> 최대 체력
    // attacks -> 몬스터의 공격 패턴 [시간, 데미지] 배열
    let [time, heal, extraHeal] = bandage;
    let totalTime = attacks[attacks.length - 1][0];
    let currentHealth = health;
    let consecutiveHeals = 0;
    let attackMap = new Map(attacks.map(attack => [attack[0], attack[1]]));

    for (let i = 0; i <= totalTime; i++) {
        if (attackMap.has(i)) {
            currentHealth -= attackMap.get(i);
            consecutiveHeals = 0;
        } else {
            if (currentHealth < health) {
                currentHealth += heal;
                consecutiveHeals++;
            } else {
                consecutiveHeals++;
            }

            if (consecutiveHeals === time) {
                currentHealth += extraHeal;
                consecutiveHeals = 0;
            }

            if (currentHealth > health) {
                currentHealth = health;
            }
        }

        if (currentHealth <= 0) {
            return -1;
        }
    }

    return currentHealth > 0 ? currentHealth : -1;
}