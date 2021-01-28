class Person {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }

    getName() {
        return this.name;
    }

    getJob() {
        return this.job;
    }
}

let goodGuy = new Person('Jim', 'Commissioner');
console.log(goodGuy);