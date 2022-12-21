const sumZero: Array<number> = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2]; //sorted array or input

// ------------Solution One
const getSumedPair = (array: Array<number>) => {
  for (let number of array) {
    //diversing into each and every number of array
    for (
      //comparing the numbers of array
      let j = 1;
      j < array.length;
      j++
    ) {
      //condition checking if some of comapred numbers is 0 then return array of those numbers
      if (number + array[j] === 0) {
        return [number, array[j]];
      }
    }
  }
};

//storing the result into a constant variable
const result: any = getSumedPair(sumZero);
//consoling the result
console.log(result); //[-4,4] OUTPUT!
//----------------

//-----------Solution 2 linear complexity

// //suposing two sides of array 1 starts from 0 and other one starts from -1
// const getSumedPair = (array: any) => {
//   let left: any = 0;
//   let right: any = array.length - 1;

//   //while loop to check all numbers
//   while (left < right) {
//     const sum: any = array[left] + array[right];
//     if (sum === 0) {
//       return [[array[left], array[right]]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// };

// const result: any = getSumedPair(sumZero);
// console.log(result);
// ///------------------
