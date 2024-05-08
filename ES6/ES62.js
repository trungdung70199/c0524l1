// 1. Viết 1 arrow function nhận vào 1 số, trả về true nếu số nguyên tố, false nếu không nguyên tố
// 2. Viết 1 arrow function nhận vào 1 mảng, sử dụng map để in ra các số nguyên tố trong mảng
// 3. Viết 1 arrow function nhận vào 1 mảng, trả về 1 mảng chỉ gồm các phần tử số nguyên tố, sử dụng filter
// 4. Viết 1 arrow function nhận vào 1 mảng, trả về 1 tổng các bình phương từng phần tử, sử dụng reduce

// Ex1
const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
};

// Ex 2
const SNT2 = arr => arr.map(num => isPrime(num));

// Ex3
const SNT3 = arr => arr.filter(num => isPrime(num));

// Ex4
const TongBP = arr => arr.reduce((acc, curr) => acc + curr ** 2, 0);

// Ex5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(isPrime(7)); 
console.log(SNT2(numbers)); 
console.log(SNT3(numbers)); 
console.log(TongBP(numbers)); 
