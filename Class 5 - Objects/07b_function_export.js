export function add(...numbers) {
    let sum = 0;
    numbers.forEach((number) => {
        sum = sum + number;
    });
    return sum;
}

export function subtract(x,y) {
    return x-y;
}

export const numbersArray = [1,2,3,4,5];

// console.log(add(5, 10, 20));