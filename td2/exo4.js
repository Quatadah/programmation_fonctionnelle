function powerLinear(x,n){
    if (n==0)
        return 1;
    return x * powerLinear(x,n-1);
}


function powerLogarithmic(x,n){
    if (n==0)
        return 1;
    else if(n==1)
        return x;
    else if(n%2 == 0){
        return powerLogarithmic(x*x,n/2);
    }
    return x*powerLogarithmic(x*x,((n-1)/2));
}

