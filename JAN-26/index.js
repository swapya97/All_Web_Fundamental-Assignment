num1=prompt("enter a number ");
num2=prompt("enter a number");
num3=prompt("enter a number ");

if (num1<num2 && num1<num3)
{
        console.log(` ${num1}  is a minimum number`);
}

else if (num2<num1 && num2<num3 )
{
        console.log(` ${num2}  is a minimum number`);
}

else
{
       console.log(`${num3}   is a minimum number `);
}