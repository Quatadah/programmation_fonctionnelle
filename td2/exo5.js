function myOdd(n){
    if(n==0)
        return false;
    return myEven(n-1);
}


function myEven(n){
    if (n==0)
        return true;
    return myOdd(n-1);
}

console.log(myEven(18));