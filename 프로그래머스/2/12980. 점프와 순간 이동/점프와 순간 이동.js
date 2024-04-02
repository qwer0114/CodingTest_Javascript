function solution(n)
{
    var ans = 0;
    
    while(n>2){
        if(n%2 !==0){
            n = Math.floor(n/2)
            ans+=1;
           
        }else{
            n = n/2
           
        }
        
    }

    return ans+1;
}