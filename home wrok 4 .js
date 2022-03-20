//Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements
//starting from a to b spaced by step.
let a = +prompt('ask a first a number of arr')
let b = +prompt('ask a last number of arr')
let d = +prompt ('progres number ')
let arr = []
let s = a

while (s <= b){
    arr.push(s)
    s += d
}

console.log(arr)
// Given a string and a symbol. Find the number of occurrences of the symbol in the string.

let string1 = "some a text"
let s = "t"
let count = 0
for (let i = 0;i<string1.length;i++){
    if (string1[i]==s){
        count++
    }
}console.log(count)
//Given a string. Check whether the string is palindrome or not.
let str1 = "raceca"
let str2 = ""
let X = str1.length
for (let i = 0; i<X;i++ ){
    str2+=str1[X-1-i]
}console.log(str1==str2)
// Given an array of numbers. Find the maximum element in array.
let arr = [2,5,6,7,8,12,5]
let  c = Math.max(...arr)
console.log(c)
// Given an array. Create the array which elements are products between two neighbours.
let arr = [1,2,4,5,6,8,9,0]
let arr1=[]
for (let i = 0; i<arr.length-1; i++ ){
    arr1.push(arr[i]*arr[i+1])
}console.log(arr1)
//Given a string and symbols. Change first symbol by the second one in the string. 
let string1 = "The results are not recorded yet" 
console.log(string1.replaceAll('t','w'))
//Print the following number pattern:
let string1 = '';
let n = prompt('n = ');


for (let i = 1; i <= n;i++){
    string1 += i;
    console.log(string1);
}
for (let i = 1; i<n; i++){
    string1 = string1.slice(0,-1);
    console.log(string1);
}