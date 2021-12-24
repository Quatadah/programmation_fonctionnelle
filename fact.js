function factorial(n){
    if (n<=1)
        return 1;
    else 
        return n * factorial(n-1);
}

console.log("10! = "+ factorial(10));
console.log("20! = "+ factorial(20));
