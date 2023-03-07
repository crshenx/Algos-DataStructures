const prices1 = [7, 3, 5, 1, 6, 4];
const prices2 = [1, 2, 3, 4, 5];
const prices3 = [5, 4, 3, 2, 1];
const prices4 = [0, 0, 3, 0, 0];

function maxProfit(prices) {
  let totalProfit = 0;
  let currentStock = null;
  let onBuy = true;
  for (let i = 0; i < prices.length; i++) {
    if (onBuy) {
      if (prices[i] < prices[i + 1]) {
        currentStock = prices[i];
        onBuy = false;
      }
    }
    if (!onBuy) {
      if (currentStock < prices[i + 1]) {
        totalProfit += prices[i + 1] - currentStock;
        onBuy = true;
      }
    }
  }
  return totalProfit;
}

function maxProfit2(prices) {
  let totalProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      totalProfit += prices[i + 1] - prices[i];
    }
  }
  return totalProfit;
}

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
console.log(maxProfit(prices3));
console.log(maxProfit(prices4));
console.log(maxProfit2(prices1));
console.log(maxProfit2(prices2));
console.log(maxProfit2(prices3));
console.log(maxProfit2(prices4));
