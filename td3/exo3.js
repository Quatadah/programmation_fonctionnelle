function fact(n,p){
    if(n<=1n){return p;}
    return fact(n-1n,n*p);
}

const big = 9999n//BigInt(Number.MAX_SAFE_INTEGER)
const lol = 2n;
console.log(fact(big,1n));