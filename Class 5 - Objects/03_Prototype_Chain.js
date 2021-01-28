//Constructor
function Person() {
    this.brain = true;
}

function Student(){
    this.computer = true;
}

function Graduate() {
    this.skillz = 'Mad';
}

let p = new Person();
Student.prototype = p;
// console.log(p);

let s = new Student();
Graduate.prototype = s;
// console.log(s);

let g = new Graduate();
console.log(g.skillz, g.computer, g.brain);
console.log(Object.getPrototypeOf(s));
console.log(g.hasOwnProperty('skillz'), g.hasOwnProperty('computer'));



