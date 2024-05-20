const line = require("fs").readFileSync("/dev/stdin").toString();
let input = line.trim().split("\n").map(i => i.replace("\r", ""));
let stock = input[1].split(" ").map(Number);
let initialMoney = Number(input[0]);

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
  let own = 0;
  let restMoney = totalMoney;
  let upStreak = 0;
  let downStreak = 0;

  for (let i = 1; i < stock.length; i++) {
    if (stock[i] > stock[i - 1]) {
      upStreak++;
      downStreak = 0;
    } else if (stock[i] < stock[i - 1]) {
      downStreak++;
      upStreak = 0;
    } else {
      upStreak = 0;
      downStreak = 0;
    }

    if (upStreak === 3 && own > 0) {
      restMoney += own * stock[i];
      own = 0;
    }

    if (downStreak === 3 && restMoney >= stock[i]) {
      let shares = Math.floor(restMoney / stock[i]);
      own += shares;
      restMoney -= shares * stock[i];
    }
  }

  return restMoney + own * stock[stock.length - 1];
}

const bnpResult = BNP(initialMoney);
const timingResult = TIMING(initialMoney);

if (bnpResult > timingResult) {
  console.log("BNP");
} else if (bnpResult < timingResult) {
  console.log("TIMING");
} else {
  console.log("SAMESAME");
}