import sys


N = int(sys.stdin.readline())
numbers = []
for _ in range(N):
    numbers.append(list(map(int, sys.stdin.readline().split())))

max_current = numbers[0].copy()
min_current = numbers[0].copy()


for i in range(1, N):
    max_next = [0, 0, 0]
    min_next = [0, 0, 0]
    
   
    max_next[0] = max(max_current[0], max_current[1]) + numbers[i][0]
    max_next[1] = max(max_current[0], max_current[1], max_current[2]) + numbers[i][1]
    max_next[2] = max(max_current[1], max_current[2]) + numbers[i][2]
    
 
    min_next[0] = min(min_current[0], min_current[1]) + numbers[i][0]
    min_next[1] = min(min_current[0], min_current[1], min_current[2]) + numbers[i][1]
    min_next[2] = min(min_current[1], min_current[2]) + numbers[i][2]
    
  
    max_current = max_next.copy()
    min_current = min_next.copy()

# 결과 출력
print(max(max_current), min(min_current))