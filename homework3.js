//Given an array․ Compute the length of the array. (without using .length)
let X=[1,2,3,4,5,6]
let lenght = 0
for(let i of X ){
    lenght++
    
}alert(lenght)
//Given an array of numbers. Print the sum of the elements in array.
let array = [1,2,3,4,5,6,7,8]
let sum = 0
for(let i = 0;array[i];i++ ){
    sum+=array[i]
}console.log(sum)
//3. Given two numbers. Print powers of 2 between that numbers. (without using
//Math.pow)
function powerOf2(n)
{
  if (n == 1)
    return true;
 
  else if (n % 2 != 0 ||
           n ==0)
    return false;
 
  return powerOf2(n / 2);
}
let newar = []
let ar = []
let a = +prompt('ask a number')
let b = +prompt('ask a number2 ')
for (let i = 0;i<b-a;i++ ){
    ar.push(a+i)
}for (let i = 0;i<ar.length;i++ ){
    if (powerOf2(ar[i])==true){
        newar.push(ar[i])
    }
}console.log(newar)
//4.Given a number as input, insert dashes (-) between each two even numbers.
let number = '25468';
let result = [number[0]], 
len = number.length;

for (let i = 1; i < len; i++) {
  if (number[i -1] % 2 === 0 && input[i] % 2 === 0) {
    result.push('-', number[i]);
  } else {
    result.push(number[i]);
  }
}
console.log(result.join(''));
//5.Insert a n positive number. Print the n-st prime number.
function isPrime(numb){
    if (numb % 2 == 0) return false;
    for (let i=3; i<= Math.sqrt(numb); i = i + 2) {
      if (numb % i == 0) {
       return false;
      }
    }
    return true;
  }
  let n = +prompt('ask a number')
  let ar = []
  let newar = []
  for (let i=0;i<100;i++){
      ar.push(i)
  }
  for (let i = 0;i<ar.length;i++){
          if(isPrime(ar[i])){
              newar.push(ar[i])
           }
  }newar.length = n
  console.log(newar[n-1])