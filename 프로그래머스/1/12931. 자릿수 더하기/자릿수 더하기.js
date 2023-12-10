function solution(n)
{
    let answer;
    n = n.toString()
    if(n.length ===1) answer = parseInt(n)
    else answer = [...n].reduce((acc,cur)=>parseInt(acc)+parseInt(cur))
    return answer;

}