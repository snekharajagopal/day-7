//Shopping cart – add, remove, change quantity, total, receipt and JSON
const cart = [];

function addItem(name, price, qty) {
  const existing = cart.find((item) => item.name === name);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ name, price, qty });
  }
}

function removeItem(name) {
  const index = cart.findIndex((item) => item.name === name);

  if (index !== -1) {
    cart.splice(index, 1);
  }
}

function changeQuantity(name, qty) {
  const item = cart.find((item) => item.name === name);

  if (item && qty > 0) {
    item.qty = qty;
  }
}

function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function printReceipt() {
  console.table(cart);

  console.log("Total: Rs.", calculateTotal());

  console.log("Cart JSON:");
  console.log(JSON.stringify(cart, null, 2));
}

addItem("Pen", 10, 5);
addItem("Book", 120, 2);
addItem("Bag", 750, 1);

changeQuantity("Pen", 3);
removeItem("Book");

printReceipt();
