 function makeArray(string,array){
    const regex = /^[A-Z]*$/;
    for(let i =0; i<string.length; i++){
       let str = string[i]+ string[i+1]
       if(regex.test(str))array.push(str)
    }
}

function clustering(string1Array, string2Array, union, intersection){
 string1Array.map((str)=>{
        if(string2Array.includes(str)){
            union.push(str);
            intersection.push(str)
            string2Array.splice(string2Array.indexOf(str),1)
        }else{
            union.push(str);
        }
    })
    string2Array.map((str)=>union.push(str))
    }
 



function solution(str1, str2) {
    var answer = 65536;
    let string1 = str1.toUpperCase();
    let string2 = str2.toUpperCase();
    const regex = /^[A-Z]*$/;
    let string1Array = [];
    let string2Array = [];
    let intersection = [];
    let union = [];
    
    makeArray(string1, string1Array);
    makeArray(string2, string2Array);
    
    clustering(string1Array, string2Array, union, intersection)
 
    let result = Math.floor((intersection.length / union.length) * 65536)
    if(!union.length && !intersection.length){
        return answer
    }
    return result
}

