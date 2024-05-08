// Viết một hàm arrow có tên là sumArray, nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
// Viết một hàm arrow có tên là squareArray, nhận vào một mảng số nguyên và trả về một mảng mới với các phần tử là bình phương của các phần tử trong mảng ban đầu.
// Viết một hàm arrow có tên là filterGreaterThan, nhận vào một mảng số nguyên và một giá trị nguyên, trả về một mảng mới chứa các phần tử lớn hơn giá trị được đưa vào.
// Viết một hàm arrow có tên là maxInArray, nhận vào một mảng và trả về một giá tại lớn nhất trong mảng ban đầu.
// Viết một hàm arrow có tên là avgArray, nhận vào một mảng và trả về trung bình các giá trị trong mảng ban đầu.

// const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

// const squareArray = (arr) => arr.map(num => num * num);

// const filterGreaterThan = (arr, value) => arr.filter(num => num > value);

// const maxInArray = (arr) => Math.max(...arr);

// const avgArray = (arr) => {
//     const sum = arr.reduce((acc, curr) => acc + curr, 0);
//     return sum / arr.length;
// };

// const numbers = [1, 2, 3, 4, 5];

// console.log(sumArray(numbers)); 
// // 15
// console.log(squareArray(numbers)); 
// // 1, 4, 9, 16, 25
// console.log(filterGreaterThan(numbers, 3));
// // 4, 5
// console.log(maxInArray(numbers)); 
// // 5
// console.log(avgArray(numbers)); 
// // 3

// 1. Viết 1 arrow function nhận vào 3 số, trả về số lớn nhất
// 2. Sử dụng map in ra các số chia 3 dư 2 trong mảng
// 3. Sử dụng filter in ra các số chia 3 dư 2 trong mảng
// 4. Sử dụng map, tính tổng các phần tử * 2
// 5. Sử dụng reduce, tính tổng các phần tử * 2

// Ex1
const findMax = (a, b, c) => Math.max(a, b, c);
console.log(findMax(2, 4, 6));

// Ex2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Chia3du2 = numbers.map(num => {
    if (num % 3 === 2) {
        return num;
    }
});
console.log(Chia3du2.filter(Boolean));

// Ex3
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const Chia3du2 = numbers.filter(num => num % 3 === 2);
// console.log(Chia3du2);

// Ex4
// const numbers = [1, 2, 3, 4, 5];
// const doubledSum = numbers.map(num => num * 2).reduce((acc, curr) => acc + curr, 0);
// console.log(doubledSum);

// Ex5
// const numbers = [1, 2, 3, 4, 5];
// const doubledSum = numbers.reduce((acc, curr) => acc + curr * 2, 0);
// console.log(doubledSum);
