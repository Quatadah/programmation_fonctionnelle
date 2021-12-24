function pgcd(a,b){
    if(a===0)
        return b;
    else if (b===0)
        return a;
    else{
        return pgcd(b,a%b);
    }
}

