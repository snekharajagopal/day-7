//Use reduce to find the total, the highest value and the count of numbers above 50
const numbers = [20, 60, 80, 40, 100, 30];
const result = numbers.reduce(
    (acc, n) => {
        acc.total += n;

        if (n > acc.highest) {
            acc.highest = n;
        }

        if (n > 50) {
            acc.count++;
        }

        return acc;
    },
    {
        total: 0,
        highest: -Infinity,
        count: 0
    }
);

console.log(result);