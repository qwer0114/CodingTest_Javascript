function solution(numbers) {
    //console.log((1001).toString(2), 2**0)

    return numbers.map((v,i) => {    
        let toStr = v.toString(2).split('').reverse().indexOf('0')
        if(toStr === -1) return v + 2 ** (v.toString(2).length - 1)
        return v + Math.ceil(2 ** (toStr -1))
    });
}