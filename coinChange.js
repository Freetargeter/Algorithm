const coinChange = function (total, coins) {
  // TODO: 여기에 코드를 작성합니다.
  let resultArr = new Array(total+1).fill(0)
  resultArr[0] = 1
  for(let i=0; i<coins.length; i++) {
    for(let j=0; j<total+1; j++) {
        if (j >= coins[i] && j!==0) {
        resultArr[j] = resultArr[j-coins[i]] +resultArr[j]
      }
    }
  }
  return resultArr[resultArr.length-1]
};
let total = 10;
let coins = [1, 5];
let output = coinChange(total, coins);