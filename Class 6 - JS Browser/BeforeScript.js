function answer() {
    let reply = prompt('Hello, what is your name?');
    let targetHeading = document.getElementById("answer");
    targetHeading.innerHTML = "Answer: " + reply ;
}