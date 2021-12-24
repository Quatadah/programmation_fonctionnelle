function cons(_car,_cdr){ return {car: _car,cdr: _cdr};}
const nil = {};
function car(cons){return cons["car"];}
function cdr(cons){return cons["cdr"];}

function head(l){ return car(l);}
function tail(l){ return cdr(l);}
function isEmpty(l){ return l===nil;}

function node(_val,_children){ return {val:_val,children:_children};}
function val(tree){return tree["val"];}
function children(tree){return tree["children"];}

function hasKey(obj,key){
    return Object.keys(obj).includes(key);
}

function isList(l){
    return hasKey(l,"car") && hasKey(l,"cdr");
}

function isTree(tree){
    return hasKey(tree,"val") && hasKey(tree,"children");
}

/*
let aList = cons(4,nil);
let aTree = node(4,cons(node(3,nil),node(2,nil)))
console.log(isList(aList));
console.log(isTree(aTree));
*/

function listFlatten(l){
    str = "[";
    while(tail(l)!==nil){
        str = str + head(l) +", "
        l = tail(l)
    }
    return str + head(l) +"]";
}

function listFlattenTr(l){
    if(head(l)!==nil){
        console.log(`${head(l)}, `);
        return listFlattenTr(tail(l));
    }
    else if (tail(l)===nil)
        console.log("]");
}

function listCount(l,value){
    if (tail(l)===nil && head(l)===value)
        return 1;
    else if (tail(l)===nil && head(l)!==nil)
        return 0;
    else if (head(l)===value)
        return 1 + listCount(tail(l),value);
    else if (head(l)!==value)
        return listCount(tail(l),value);
}

const tnil = {};
function binaryTreeisEmpty(t){ return t === tnil;}

function binaryNode(v,l,r){
    return node(v,cons(cons(l,tnil),cons(r,tnil)));
}

function binaryLeaf(v){
    return binaryNode(v,tnil,tnil);
}

function leftChild(t){
    return t["children"]["car"];
}

function rightChild(t){
    return t["children"]["cdr"];
}

let array = [1,2,3,4,5,6,7,8,9]
const map2 = array.map((e,i)=>[e*e,i])

const reducer = (acc,currentValue) => acc +currentValue;
console.log(array.reduce(reducer));

let aList = cons(4,cons(5,cons(2,cons(4,nil))));





































