function calculateTotal(items) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].qty;
    }

    return total;
}

const cart = [
    { name: "Pen", price: 10, qty: 5 },
    { name: "Book", price: 120, qty: 2 },
    { name: "Bag", price: 750, qty: 1 }
];

const result = calculateTotal(cart);

console.log("Total: Rs. " + result.toFixed(2));

const names = cart.map(item => item.name);

console.log("Product names:", names);

const costly = cart.filter(item => item.price > 100);

console.log("Costly products:");
console.table(costly);

const sum = cart.reduce(
    (s, item) => s + item.price * item.qty,
    0
);

console.log("Total using reduce:", sum);

const sorted = [...cart].sort(
    (a, b) => a.price - b.price
);

console.log("Sorted products:");
console.table(sorted);

const bag = cart.find(item =>
    item.name.toLowerCase() === "bag"
);

console.log("Found bag:", bag);

const copy = [...cart];

copy.push({
    name: "Cap",
    price: 200,
    qty: 1
});

console.log("Original cart:");
console.table(cart);

console.log("Copied cart:");
console.table(copy);

const user = {
    name: "Asha",

    greet() {
        console.log("Hi " + this.name);
    }
};

user.greet();

const data = JSON.parse('{"name": "Asha", "age": 20}');

console.log("Parsed JSON:", data);

const json = JSON.stringify(cart);

console.log("JSON length:", json.length);

console.log("Last product:", cart[cart.length - 1]);