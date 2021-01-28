function Teacher() {


}
let ken = new Teacher();
Teacher.prototype.teach = function() {
    console.log("I am teaching");
}
console.log(ken);