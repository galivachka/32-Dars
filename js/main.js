// const myArray = [125, 555, 44];

// const calc = function myFun(number) {
//     if (number >= 50 && number <= 300) {

//         return number * 0.15

//     } else {
//         return number * 0.3;

//     }
// }
// console.log(calc(myArray[0]));
// console.log(calc(myArray[1]));
// console.log(calc(myArray[2]));
// const years = [1998, 1999, 2000, 1978];
// const calc = function myFun(number) {
//     if (number >= 2000) {
//         return "Siz 21 asrlsz";
//     } else {
//         return "Siz 20 asrlsz";
//     }
// }

// console.log(calc(years[0]));
// console.log(calc(years[1]));
// console.log(calc(years[2]));
// console.log(calc(years[3]));

// const number = +prompt("Son kirit: ");
// // const toq = [1, 3, 5];
// // const juft = [2, 4, 6];
// const myFun = function(number) {
//         if (number / 2 === 0) {
//             return "juft";
//         } else {
//             return "toq";
//         }
//     }
// console.log(number);




//UY ishi 1


const years = [1998, 1999, 2007, 1978];


function myFun(number) {
    return `${2023 - number} yoshsiz`
}

for (let i = 0; i < years.length; i++) {

    console.log(myFun(years[i]));

}



// 2 Uy ishi
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function myFun(number) {
//     return number * 2
// }
// for (let i = 0; i < numbers.length; i++) {
//     console.log(myFun(numbers[i]));
// }