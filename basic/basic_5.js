const apriori = require("apriori");

const transactions = [
  ["bread", "milk"],
  ["bread", "diapers", "beer"],
  ["milk", "orange juice"],
  ["bread", "milk", "cereal"],
];

const minSupport = 0.5; // Minimum support threshold

const results = apriori(transactions, minSupport);

console.log(results);
