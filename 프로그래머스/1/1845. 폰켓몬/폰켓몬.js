function solution(nums) {
    var answer = 0;
    let pick = nums.length/2
    let set = new Set(nums);
    let setArray = [...set];
    
    if(setArray.length< pick)answer = setArray.length
    else answer = pick
    
    return answer;
}