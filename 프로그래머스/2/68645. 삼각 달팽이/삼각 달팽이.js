function solution(n) {
  
    const array = Array(n).fill().map(()=>[]);
    
    let number = 1;
    let col = 0;
    let row = 0;
    let size = n;
    
  
    while (size > 0) {
     
        for (let i = 0; i < size; i++) {
            array[col][row] = number++;
            if (i < size - 1) col++;
        }
        
     
        for (let i = 0; i < size - 1; i++) {
            row++;
            array[col][row] = number++;
        }
        
     
        for (let i = 0; i < size - 2; i++) {
            col--;
            row--;
            array[col][row] = number++;
        }
        
   
        col++;
        size -= 3;
    }
    
    return array.flat();
}