function solution(s) {
  let words = s.split(" ");
  let answer = [];
  
  for(let word of words){
      let firstWords = ""
      if(typeof word[0] === "string"){
          firstWords = word[0].toUpperCase();
      }
      let string = word.substr(1).toLowerCase();
      answer.push(`${firstWords}${string}`)
  }
    
   return answer.join(" ")
    
}