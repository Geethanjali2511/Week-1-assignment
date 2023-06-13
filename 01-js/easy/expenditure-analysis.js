/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let filter = [];
  let total = 0;
  let p = 0;
  if (transactions === []) {
    return [];
  } else {
    for (let i = 0; i < transactions.length; i++) {
      let currentObject = transactions[i];
      let category = currentObject.category;
      let price = currentObject.price;

      let existingCategory = filter.find((item) => item.category === category);

      if (existingCategory) {
        existingCategory.totalSpent += price;
      } else {
        filter.push({ category, totalSpent: price });
      }
    }

    return filter;
  }
}
module.exports = calculateTotalSpentByCategory;
