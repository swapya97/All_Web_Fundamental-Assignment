var str = prompt("Enter any string");
var ArrStr = str.split("");
console.log("Given String by User is : " + str);
console.log(ArrStr);
var ctr=0;
for (var i =0;i<ArrStr.length;i=i+1){

    switch(ArrStr[i]){

        case'a':
        case'A':
        ctr=ctr+1;
        break;
        
        case'e':
        case'E':
        ctr=ctr+1;
        break;
        
        case'i':
        case'I':
        ctr=ctr+1;
        break;
        
        case'o':
        case'O':
        ctr=ctr+1;
        break;
        
        case'u':
        case'U':
        ctr=ctr+1;
        break;
    }
}




console.log("Total vovels in given string is :" +ctr);