function sum(x,y){
    if(x==y)
        return x;
    if (x>y)
        return 0;
    return x + sum(x+1,y);
}


function sumSquares(x,y)
{
    if(x==y)
        return x*x;
    else if (x>y)
        return 0;
    else
        return x*x + sumSquares(x+1,y);
}

function sumGeneric(f,x,y)
{
    if (x==y)
        return f(x);
    else if (x>y)
        return 0;
    else
        return f(k) + sumGeneric(f,x+1,y);
}
