function solution(bandage, health, attacks) {
    // health -> 최대체력 attacks -> 몬스터의 공격 패턴
    var answer = 0;
    let time = bandage[0];
    let heal = bandage[1];
    let extraHeal = bandage[2];
    let totalTime = attacks[attacks.length-1][0]
    let currentHealth = health;
    let success = 0;
    let attackMap = new Map();
    
    attacks.map((attack)=>{
        attackMap.set(attack[0],attack[1])
    })
    for(let i =0; i<=totalTime; i++){
        if(attackMap.has(i)){
            currentHealth -= attackMap.get(i)
            success = 0;
            continue;
        }
        if(currentHealth>=health){
            currentHealth = health
            success++;
            continue;
        }else{
            success++;
            currentHealth += heal
        }
        if(success === time){
            success = 0;
            currentHealth += extraHeal
        }
        if(currentHealth<=0) return -1
    }
    
    
    
     return currentHealth <=0 ? -1 : currentHealth
}