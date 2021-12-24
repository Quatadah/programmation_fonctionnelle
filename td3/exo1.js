function plus(a,b){
    if(b==0)
        return a;
    else if(b>0)
        return plus(a+1,b-1)
    else
        return plus(a-1,b+1)
}

function produit(a,b){
    function produit(a,b,counter){
        if (b==0)
            return counter;
        else if (b>0)
            return produit(a,b-1,counter+a)
        else
            return produit(a,b+1,counter-a)
    }
    return produit(a,b,0);
}

