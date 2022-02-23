var num1=prompt("enter a number ")
var num2=parseInt(num1)

var fibonacinumber=0;
var first=0;
var second=1;
console.log(first)
console.log(second)

for (let i=2;i<num1;i++)
{
    fibonacinumber=first+second;
    first=second;
    second+fibonacinumber;
    console.log(fibonacinumber);
}
