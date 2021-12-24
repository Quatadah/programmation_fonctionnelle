function fibo_rec1(n){
    if (n<=1){return n;}
    return fibo_rec1(n-1)+fibo_rec1(n-2);
}
function fibo_rec2(n){
    let memo = {};
    function fibo_rec22(n){
        if(n<=1){return n;}
        if(memo[n] != undefined ){ return memo[n];}
        return memo[n]=fibo_rec22(n-1)+fibo_rec22(n-2);
    }
    return fibo_rec22(n);
}

function fiboGen(n,a,b){
    switch(n){
        case 1: return a;
        case 2: return b;
        default: return fiboGen(n-1,a,b) + fiboGen(n-2,a,b);
    }
}

