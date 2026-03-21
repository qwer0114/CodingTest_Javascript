function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let answer = 0;
  let i = 0; 
  let j = 0; 

  while (i < A.length && j < B.length) {
    if (B[j] > A[i]) {
      answer++;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return answer;
}