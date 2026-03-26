

function solution(user_id, banned_id) {
    var answer = 0;
    
    function isMatch(userId, bannedId) {
        if (userId.length !== bannedId.length) return false;
        for (let i = 0; i < bannedId.length; i++) {
            if (bannedId[i] !== '*' && bannedId[i] !== userId[i]) return false;
        }
        return true;
    }
    
    const candidates = banned_id.map(b => user_id.filter(u => isMatch(u, b)));
    const resultSet = new Set();
    const used = new Set();
    
     function dfs(index) {
        if (index === banned_id.length) {
            const key = [...used].sort().join(',');
            resultSet.add(key);
            return;
        }

        for (const userId of candidates[index]) {
            if (!used.has(userId)) {
                used.add(userId);
                dfs(index + 1);
                used.delete(userId);
            }
        }
    }
    
    dfs(0)
    
 

    
   return resultSet.size;
}