const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line
  .trim()
  .split("\n")
  .map((i) => i.replace("\r", ""));
let stock = input[1].split(" ");
let totalMoney = Number(input[0]);

function BNP(totalMoney) {
  let own = 0;
  let restMoney = totalMoney;

  for (let price of stock) {
    let shares = Math.floor(restMoney / price);
    own += shares;
    restMoney -= shares * price;
  }

  return restMoney + own * stock[stock.length - 1];
}

function TIMING(totalMoney) {
  let prevDatePrice = 0;
  let up = 0;
  let down = 0;
  let own = 0;
  let restMoney = totalMoney;

  stock.map((stock) => {
    if (Number(stock) > prevDatePrice) {
      up += 1;
      down = 0;
    } else if (Number(stock) < prevDatePrice) {
      down += 1;
      up = 0;
    } else if (prevDatePrice === Number(stock)) {
      down = 0;
      up = 0;
    }
    if (up === 3 && own > 0) {
      restMoney += own * stock;
      own = 0;
    }
    if (down === 3 && restMoney >= Number(stock)) {
      let shares = Math.floor(restMoney / stock);
      own += shares;
      restMoney -= shares * Number(stock);
    }
    prevDatePrice = Number(stock);
  });
  return restMoney + Number(stock.at(-1)) * own;
}

if (BNP(totalMoney) > TIMING(totalMoney)) console.log("BNP");
else if (BNP(totalMoney) < TIMING(totalMoney)) console.log("TIMING");
else if (BNP(totalMoney) === TIMING(totalMoney)) console.log("SAMESAME");
