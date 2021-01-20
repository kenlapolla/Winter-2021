const person = {
    firstName: 'Ken',
    lastName: 'Lapolla',
    fullName: function() {
        return `${person.firstName} ${person.lastName}`
    }
};

console.log(person.fullName());