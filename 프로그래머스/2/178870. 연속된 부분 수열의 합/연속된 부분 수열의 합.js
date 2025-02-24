function solution(sequence, k) {
    var answer = [0,0];
    const length = sequence.length;
    const target = k;
    let left = 0;
    let right = 0;
    let sum = sequence[0];
    let minLength = Infinity
    while(right<length){
        if(sum===target){
            if(right-left<minLength){
                minLength = right-left;
                answer = [left,right]
            }
            sum -= sequence[left];
            left++;
        }
        else if(sum<k){
            right++;
            if(right<length){
                sum+=sequence[right]
            }
        }
        else{
            sum -= sequence[left];
            left++;
        }
    }
   
    return answer;
}