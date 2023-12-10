 function solution(players, callings) {
        let rankObj = new Map();
        let answer = players;
        let currentRank;
        let frontPlayer;
        players.map((player, i) => {
          rankObj.set(player, i);
        });

        for (let i = 0; i < callings.length; i++) {
          currentRank = rankObj.get(callings[i]);
          frontPlayer = players[currentRank - 1];
          rankObj.set(players[currentRank], currentRank - 1);
          rankObj.set(players[currentRank - 1], currentRank);
          players[currentRank] = frontPlayer;
          players[currentRank - 1] = callings[i];
        }

        return answer;
      }