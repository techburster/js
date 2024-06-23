// program for addition


// function Sub() {
//     let sub1 = 10;
//     let sub2 = 2;
//     console.log(sub1 - sub2);
// }



// function Add() {
//     // You can write your code
//     let a = 10;
//     let b = 2;
//     console.log(a + b);

// }
// Add();
// Sub();

// function Addition(a, b) {
//     let Additions = a + b
//     console.log("addition", Additions);
// }
// Addition(100, 2)

// function Devision(a, b) {
//     let Divisions = a / b;
//     console.log("division", Divisions)
// }
// Devision(10, 2)

// function multi(a, b) {
//     let multiple = a * b
//     console.log(multiple, "multiple");
// }
// multi(3, 4)

// function substraction(a, b) {
//     let subs = a - b;
//     console.log("substraction", subs);
// }
// substraction(10, 1)

// function abc(num) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         console.log("fizzbuzz.")
//     } else if (num % 3 == 0) {
//         console.log("fizz");
//     }
//     else {
//         (num % 5 == 0)
//         console.log("buz.")
//     }
// }

// let sumofnum = 0;
// for (let i = 0; i < 100; i++) {
//     sumofnum = sumofnum + i;
// }










// print 1 to 10 numbers
for (i = 1; i <= 10; i++) {
    // console.log(i, "1 to 10 num")
}

// print the sum of n numbers
function sumofnum(a, b) {
    sum = a + b;
    // console.log(sum, "sum of num")
}
sumofnum(2, 9) // pass the argument value in function name

// print even numbers


function evennum() {
    for (i = 0; i <= 100; i + 2) {
    }
}
// console.log(evennum,"even number")

// factorial 
// function factorial(n){
//     let value = 1
//     for(i = 1; i<=n; i++){

//         value = value*1
//     }
//     console.log(value,"factorial")
// }
// console.log(factorial,"fectorial")



// let i = 1;
// while(i<=100){
//     if(i%1==2){}
//     console.log("prime no", i)
//     i++
// }




function allPrime(num) {
    let isPrime = true;
    if (num == 1) {
        return false;
    }
    for (let i = 2; i <= num; i++) {
        if (num % i == 0) {
            isPrime = false;
        }
    }
    return isPrime;
}
console.log(isPrime(1));


// sum(0, 1)

// abc(15)
// abc(5)
// abc(3)