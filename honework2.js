//For a given number calculate the sum of its digits.
let a = +prompt('take a number')
let b = 0;

while (a) {
    b += a % 10;
    a = Math.floor(a / 10);
}

console.log(b);

//Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” if it is valid
//and “no&quot; otherwise. (Triangle is valid if the sum of its two sides are greater than the third side).
let a = +prompt('ask a number')
let b = +prompt('ask a number') 
let c = +prompt('ask a number')
if(a + b>c && a + c>b && b + c> a ){
    console.log('yes')
}else {
    console.log('no')
}

//Given a number print its digits count.
let a = +prompt('ask a number')
let i = 0
while(a){
    a = Math.trunc(a/10)
    i++
    
} alert(i)

//Count numbers of digit 9 in a number.
let a = +prompt('ask a number')
let b = 0
let i = 0
while(a){
    a = (a - a % 10)/10
    b = a % 10
    if (b/9===1)  {
        i++
    }
    
} console.log(i+1)

//Given a positive number. Print it in reverse order.
let a = +prompt('ask a number')
let b 
let i = 0
while (a) {
    i = i * 10
    b = a % 10
    a = (a - b) / 10
    i = i + b
    
}console.log(i)