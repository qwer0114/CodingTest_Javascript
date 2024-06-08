function solution(order) {
    var answer = [];
    let container = Array.from({length: order.length}, (_, i) => i + 1).reverse();
    let tempContainer = [];
    let i = 0;
    
    while(true){
        if(container.length>0 && container.at(-1)===order[i]){
            container.pop();
            answer++;
            i++;
        }else if(tempContainer.length>0 && tempContainer.at(-1)===order[i]){
            tempContainer.pop();
            answer++;
            i++;
        }else if(container.length>0){
            tempContainer.push(container.pop());
        }else{
            break;
        }
        
    }
    
    return answer;
}