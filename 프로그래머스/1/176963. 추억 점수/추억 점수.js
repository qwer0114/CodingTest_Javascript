function solution(name, yearning, photo) {
        var answer = [];
        let obj = {};
        let sum = 0;
        for (let i = 0; i < name.length; i++) {
          obj[name[i]] = yearning[i];
        }

        photo.map((photo) => {
          photo.map((p) => {
            if (obj[p] !== undefined) {
              sum = sum + obj[p];
            }
          });
          answer.push(sum);
          sum = 0;
        });

        console.log(obj);
        return answer;
      }
