function Teacher(nameIn){
    this.name = nameIn;
    this.teach = function () {
        console.log(`${this.name} says hi`);
        console.log(this);
    }
}

let teacher1 = new Teacher('Ken');
let teacher2 = new Teacher('Sierra');
console.log(teacher1.teach());
console.log(teacher2.teach());
