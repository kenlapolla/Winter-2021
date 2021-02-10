let myGreeting = "hi"; //No External Access
let myModule = {
    sayHi: (name) => {
        console.log(`${myGreeting} ${name}`);
        console.log(module);
    }
};


module.exports = myModule;
