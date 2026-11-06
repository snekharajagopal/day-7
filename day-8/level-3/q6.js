//Read products from JSON, filter, sort and display
const productsJSON = `[
    {"name": "Pen", "price": 10},
    {"name": "Book", "price": 120},
    {"name": "Bag", "price": 750},
    {"name": "Pencil", "price": 5},
    {"name": "Bottle", "price": 200}
]`;

const products = JSON.parse(productsJSON);

const filtered = products
  .filter((p) => p.price >= 50 && p.price <= 300)
  .sort((a, b) => a.price - b.price)
  .map((p) => `${p.name} - Rs. ${p.price}`);

console.log(filtered);
document.getElementById("productList").innerHTML = filtered
  .map((item) => `<li>${item}</li>`)
  .join("");
