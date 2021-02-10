let myGreeting = "hi" //Private!
let myModule = {
    sayHi: (name) => {
        console.log(myGreeting + ' ' + name);
    }
}

module.exports = myModule;