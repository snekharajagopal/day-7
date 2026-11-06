//q8 bug code
// const person = {
//     name: "Ravi",
//     show: () => console.log(this.name)
// };
// person.show;

//q8 fix code
const person = {
    name: "Ravi",

    show() {
        console.log(this.name);
    }
};

person.show();