// function b(n){
//   if(n < 0){
//     return;
//   }
//   if(n < 2){
//     return n;
//   }
//   let result = "";
//   let r;
//   while(n > 1){
//     r = n % 2;
//     result = r + result;
//     n = Math.trunc(n / 2);
//   }
//     result = 1 + result;
//   return result;
// }
//
// function isPrime(n){
//   if(n < 2){
//     return false;
//   }
//   if(n === 2){
//     return true;
//   }
//   for(let i = 2; i < n; i++){
//     if(n%i === 0){
//       return false;
//     }
//   }
//   return true;
// }
//   function g(n){
//     if(n <= 2 || n % 2 !== 0){
//       return false;
//     }
//     for (let i = 2; i < n; i++){
//       if(isPrime(i) && isPrime(n - i)){
//         return [i, n - i];
//       }
//     }
//     return false;
//   }

// function atm(num){
//   let p;
//   let result = '';
//   let i = 0;
//   let c = [5000, 2000, 1000, 500, 200, 100];
//   while(num !== 0){
//     num = Math.ceil(num / 100) * 100;
//     p = Math.trunc(num / c[i]);
//     result+= ` + ${p}*${c[i]}`;
//     num = num - p * c[i];
//     i++;
//   }
//   return result;
// }