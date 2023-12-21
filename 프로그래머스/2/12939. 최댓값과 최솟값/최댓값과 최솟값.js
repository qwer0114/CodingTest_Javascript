function solution(s) {
    var answer = '';
    let array = [];
    
    
   s.split(" ").map((s)=>{
       array.push(Number(s));
   })
    array.sort((a,b)=>a-b)
   
    return array[0]+" "+array[array.length-1];
}
