function convert(n){
    str = new String("");
    while(n>0)
    {
        r = String.fromCharCode(n%2+48 )
        str = r.concat(str);
        n = Math.floor(n/2); // n >>= 1 
    }
    return str;
}

function convert2(n){
    let str = '';
    while(n){
        str = (n & 1) + str;
        n >>= 1;
    }
    return str;
}

function convert2Base(x,base){

}

console.log(convert2(152));