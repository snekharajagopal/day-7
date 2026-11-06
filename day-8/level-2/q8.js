//Count how many times each word appears in a sentence, using an object
const sentence = "apple mango apple banana mango apple";
const words = sentence.split(" ");
const count = words.reduce((result, word) => {
    result[word] = (result[word] || 0) + 1;

    return result;
}, {});
console.log(count);