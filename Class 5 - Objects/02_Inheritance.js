//Factory Function
function createTeacher(name) {
    return {
        name: name
    }
}

//Constructor Function
function Teacher(name) {
    this.name = name;
    // this.teach = function() {
    //     console.log(`I am ${this.name} the teacher`);
    // }
}

let sierra = new Teacher('Sierra');
//sierra = {}
// {} = Teacher {}

let olga = new Teacher('Olga');
Teacher.prototype = {
    teach: () => {
        console.log(`I am ${this.name} the teacher`);
        console.log(this);
    }
}

let ken = new Teacher('Ken');

ken.teach();
olga.teach();
console.log(ken);