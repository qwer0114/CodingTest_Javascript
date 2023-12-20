function solution(n, arr1, arr2) {
    var answer = [];
    
    for (let i = 0; i < n; i++) {
        let row1 = arr1[i].toString(2).padStart(n, "0");
        let row2 = arr2[i].toString(2).padStart(n, "0");
        let rowResult = "";
        
        for (let j = 0; j < n; j++) {
            if (row1[j] === "0" && row2[j] === "0") {
                rowResult += " ";
            } else {
                rowResult += "#";
            }
        }
        
        answer.push(rowResult);
    }

    return answer;
}