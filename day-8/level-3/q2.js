//Store contacts as objects inside an array.
const contacts = [];

function addContact(name, phone) {
    contacts.push({ name, phone });
}

function searchContact(name) {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
    );
}

function sortContacts() {
    contacts.sort((a, b) =>
        a.name.localeCompare(b.name)
    );
}

function deleteContact(index) {
    if (index >= 0 && index < contacts.length) {
        contacts.splice(index, 1);
    }
}

function showContacts() {
    console.table(contacts);
}

addContact("Asha", "9876543210");
addContact("Ravi", "9876501234");
addContact("Meena", "9876512345");

//console.log(searchContact("as"));

console.log(JSON.stringify(searchContact("as"), null, 2));

sortContacts();

showContacts();

deleteContact(1);

showContacts();