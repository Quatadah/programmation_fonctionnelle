

function myConcat(separator, ...strings){
    console.log(arguments);
    console.log(strings);
    return strings.join(separator);
}


function code(key){
    function makeCode(str,offset){
        for(let i = 0;i < str.length; i++){
            str[i] = str[i] + offset;
        }
    };
    function encode(str){ makeCode(str,key);};
    function decode(str){ makeCode(str,-key);};
    return {encode: encode , decode: decode};
}

function makeComplex(re,im){
    function add(aComplex){
        return makeComplex(re+aComplex.re,im+aComplex.im);
    }
    function mul(aComplex){
        return makeComplex(re*aComplex.re - im*aComplex.im, re*aComplex.im + im*aComplex.re);
    }
    return {re:re, im:im, add:add, mul:mul}
}

let c1 = makeComplex(1,0);
let c2 = makeComplex(0,1);
console.log(c1.mul(c2));