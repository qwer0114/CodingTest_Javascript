function solution(players, m, k) {
    var answer = 0;
    let currentServer = Array(players.length).fill().map(()=>0);
 
    for(let i = 0; i<players.length; i++){
        let requiredServer = Math.floor(players[i]/m);
        let activateServer = findActivateServer(currentServer,i,k)
        if(requiredServer>0 && activateServer<requiredServer){
            currentServer[i] = requiredServer-activateServer
            answer += requiredServer-activateServer
         }else{
             currentServer[i] = 0
         }
    }
    
    return answer;
}

function findActivateServer(currentServer,time,k){
    let activateServer = 0;
    let limit = Math.max(0, time - k+1);

    for(let i = time-1; i>=limit; i--){
        if(currentServer[i]!==0){
            activateServer += currentServer[i]
        }
    }
    return activateServer
}