//index.js
 let sayHello = () => {
    let header = document.querySelector("#greeting");
    let hello = ("<h1> hello world.  Ken do you believe? </h1>");
    header.innerHTML = hello;
};
  
 module.exports = sayHello;