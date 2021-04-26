// function largestPalindromeProduct(n) {
//     //To get the maximum n digit number, + operator type castes String to Number type
//     let max = +[...Array(n)].reduce((a, c) => (a += 9), "");

//     //Next we get minimum n digit number from the max
//     let min = (max + 1) / 10;

//     //To store the result
//     let res = [];

//     //Starting the loop from max to min
//     for (let i = max; i >= min; i--) {
//         //Another loop
//         for (let j = max; j >= min; j--) {
//             //Getting the product
//             let num = i * j;

//             //Reversing the number
//             let numReverse = [...String(num)].reverse().join("");

//             //Checking for palindromic number
//             if (num == numReverse) {
//                 //Pushing the number into array and breaking the loop for efficiency
//                 res.push(num);
//                 break;
//             }
//         }
//     }

//     // Returning the maximum of the result array
//     return Math.max(...res);
// }

// console.log(largestPalindromeProduct(2))



// const largestPalindromeProduct = (n) => {
//     let num = '9'
//     let list = []
//     for (let i = 2; i <= n; i++) {
//         num += '9'
//     }
//     let MaxInt = parseInt(num)
//     let MinInt = (MaxInt+1)/10
//     // console.log(MaxInt)
//     // console.log(MinInt)

//     // return MinInt
//     // return MaxInt

//     for (let i = MaxInt; i >= MinInt; i--){
//         for (let j = MaxInt; j >= MinInt; j--){
//             let mul = i * j
//             // console.log(mul)
//             let reverseMul = parseInt(mul.toString().split('').reverse().join(''))
//             // console.log(mul === reverseMul)
//             if (mul === reverseMul) {
//                 list.push(mul)
//             }
//         }
//     }
//     return Math.max(...list)
// }

// console.log(largestPalindromeProduct(4))



// const digit_delete = (num) => {
//     let numString = num.toString().split('').map(x=>parseInt(x))
//     // console.log(numString)
//     let int = 0;
//     let list = [];
//     // console.log(numString.length-1)
//     for (i = 0; i <= numString.length - 1; i++){
//         if (numString[i] <= (numString[i + 1] && numString[i + 1] !== undefined)) {
//             int = numString[i+1]
//         } else if(numString[i]>int){
//             list.push(numString[i])
//         }
//     }
//     return list
// }

// console.log(digit_delete(3033))





// const join = (array, separator = ',', end = separator) =>
//     array.reduce(
//         (ac, va, i) =>
//             i === array.length - 2
//                 ? ac + va + end
//                 : i === array.length - 1
//                     ? ac + va
//                     : ac + va + separator,
//         ''
//     );

// // console.log(join(['red', 'yellow', 'green', 'red'], ',', '&'));
// console.log(join(['red', 'yellow', 'green', 'red'], ','));
// // console.log(join(['red', 'yellow', 'green', 'red']));


// function sum(num) {
//     // return Math.floor(num / 10) + num % 10
//     let sum = 0;
//     let num_string = num.toString().split("")

//     // console.log(num_string.length)

//     for (let i = 0; i < num_string.length; i++) {
//         sum += parseInt(num_string[i])
//     }

//     return sum

// }

// console.log(sum(25))
// console.log(sum(1234))
// console.log(sum(1212))





// function alphabet_char_shift(str) {
//     let all_char = str.split("")
//         // return [all_char[0].charCodeAt(), String.fromCharCode(97)]
//     all_char.forEach((ele, idx) => {
//         all_char[idx] = String.fromCharCode(ele.charCodeAt() + 1)
//     })
//     return all_char.join("")
// }

// console.log(alphabet_char_shift("abcABC"))




// function alternate_sum(arr) {
//     let result = [0, 0]
//     arr.every((ele, idx) => {
//         if (idx % 2) result[1] += ele;
//         else result[0] += ele
//     })
//     return result
// }

// console.log(alternate_sum([1, 2, 3, 4, 5]))




function array_checking(arr1, arr2) {
    let result = true;
    console.log(result)
    if (arr1.lenght == arr2.lenght) {
        console.log('Two arrays lenghts are same')
        for (let i = 0; i < arr1.lenght; i++) {
            console.log('Two arrays lenghts are same')

            for (let j = 0; j < arr2.lenght; j++) {
                console.log(i, j)
                if (arr1[i] == arr2[j]) {
                    result = true;
                }
            }
        }
        if (!result) return false;
    }
}

console.log(array_checking([1, 2, 3], [3, 2, 1]))