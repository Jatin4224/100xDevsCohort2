//Q1) write a function that searches for an element in an array and returns the index,if the element if not present than just return -1.

//approach 2
// function searchElement(arr, num) {
//   for (i = 0; i <= arr.length; i++) {
//     if (arr[i] == num) {
//       //   console.log(i);
//       return i;
//     }
//   }
//   return -1;
// }

// let arr = [1, 2, 3, 4, 5];
// let result = searchElement(arr, 3);
// console.log(result);
//approach 1

// for (i = 0; i <= arr.length; i++) {
//   let num = 6;
//   if (arr[i] == num) {
//     console.log(i);
//   } else {
//     console.log("not found");
//   }
// }

//Q2) write a function that returns the number of negative numbers in an array.

function totalCount(arr) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

let arr = [1, 2, 3, -1, -2, -3, -2];
let result = totalCount(arr);
console.log(result);
