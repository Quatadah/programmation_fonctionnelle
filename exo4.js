const { readConfigFile } = require("typescript");

let square = (x) => x*x;
let dicriminant = (a,b,c) => square(b) - 4 * a * c;
let evalQuadratic = (a,b,c,x) => a * square(x) + b *x +c;

function racine1(a,b,c){
    if (dicriminant(a,b,c) > 0)
        return (-b - Math.sqrt(dicriminant(a,b,c)))/2*a;
    else if (dicriminant(a,b,c) == 0)
        return -b/2*a;
    else
        return "No solution in R";
}


function racine2(a,b,c){
    if (dicriminant(a,b,c) > 0)
        return (-b + Math.sqrt(dicriminant(a,b,c)))/2*a;
    else if (dicriminant(a,b,c) == 0)
        return -b/2*a;
    else
        return "No solution in R";
}

function caracQuadratic(a,b,c){
    if (dicriminant(a,b,c)>0)
        return "2 racines en R";
    else if (dicriminant(a,b,c)==0)
        return "1 racine en R";
    else
        return "pas de racines en R";
}
console.log(caracQuadratic(1,4,3))