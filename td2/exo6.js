function convert(n){
    if(n<=0)
        return '';
    return ''+ convert(n>>1) + (n&1);
}

function convert2Base(n,base){
    
}