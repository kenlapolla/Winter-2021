let list = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
list[4] = 'fair trade coffee';
list.push('fruit loops');
list.splice(2,2,'rice', 'beans');

let cart = [];
cart.push(list.pop());
cart.push(list.shift());

while(list.length > 0)
    cart.push(list.pop());

cart.sort().reverse();
console.log("My cart contains: ", cart.join(','));