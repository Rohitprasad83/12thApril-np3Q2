const arr = [
  { category: 'men', color: 'blue', quantity: 5, item: 'jeans' },
  { category: 'women', color: 'blue', quantity: 5, item: 'jeans' },
  { category: 'women', color: 'blue', quantity: 6, item: 'tshirt' },
  { category: 'men', color: 'blue', quantity: 2, item: 'tshirt' },
];

const totalQuantity = { jeans: 0, tshirt: 0 };

const getTotalQuantity = (arr) => {
  for (let i of arr) {
    if (i.item === 'jeans') {
      totalQuantity.jeans += i.quantity;
    } else {
      totalQuantity.tshirt += i.quantity;
    }
  }
};
getTotalQuantity(arr);
console.log(totalQuantity);
