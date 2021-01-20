const person = {
    firstName: 'Ken',
    lastName: 'Lapolla',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(inputValue) {
        const inputString = inputValue.split(' ');
        this.firstName = inputString[0];
        this.lastName = inputString[1];
    }

};

person.fullName = 'Josh Smith';
console.log(person.fullName);