function solution(triangle) {
    var answer = 0;
    let height = triangle.length-1
    
    for(let i = height; i>0; i--){
        for(let j = 0; j<triangle[i].length; j++){
            triangle[i-1][j] = Math.max(triangle[i-1][j]+triangle[i][j],triangle[i-1][j]+triangle[i][j+1])
        }
    }
    
    return triangle[0][0];
}