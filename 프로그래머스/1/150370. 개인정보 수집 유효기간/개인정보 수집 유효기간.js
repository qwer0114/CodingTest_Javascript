function solution(today, terms, privacies) {
    var answer = [];
    terms = terms.map((t)=>t.split(" "));
    let map = new Map(terms);
    const expire = new Date(today);
    privacies = privacies.map((pr)=>pr.split(" "));
 let date = [];
    privacies.map((pr)=>{
       date.push(getDay(pr[0],map.get(pr[1])))
   })


   console.log(date)
    console.log(expire)
    date.map((d,i)=>{
        if(d<=expire){
            answer.push(i+1)
        }
    })
  
    return answer;
}

function getDay(date,privaciy){
    let fullDate = new Date(date)
    let year = Number(fullDate[0]);
    let month = Number(fullDate[1]);
    let days = Number(fullDate[2]);
    let totalDate = days + privaciy*28;
    fullDate.setMonth(fullDate.getMonth()+Number(privaciy))
    return fullDate;
    
 
}