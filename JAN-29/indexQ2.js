var num=prompt("Enter any number: ");
var num1=parseInt(num);

if (isNaN(num)){
    alter(num+"please enter a valid number:")
}
else{
    var ctr=0;
    for(var i=1;i<=num1;i++){
        if (num1%i==0){
            ctr=ctr+1;
        }
    }

    if (ctr>2){
        console.log(num1+" not a prime number .")
    }else{
        console.log(num1+" is a prime number .")
    }
}