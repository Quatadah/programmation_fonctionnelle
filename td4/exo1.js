function cons(_car,_cdr){ return { car: _car, cdr: _cdr} ; }
const nil = {};
function car(cons){ return cons['car'] ; }
function cdr(cons){ return cons['cdr'] ; }

function head(l){ return car(l); }
function tail(l){ return cdr(l); }
function isEmpty(l) { return l === nil;}

let aList = cons(54,cons(1,cons(2,nil)));

// Exercice 1

function listIota(a,b){
    let l = cons(b-1,nil);
    for(let i = b-2 ; i>=a ; i--){
        l = cons(i,l);
    }
    return l;
}

function listDisp(l){
    let str = "[";
    let p = l;
    while(tail(p)!=nil){
        str = str + head(p) +", " ;
        p = tail(p);
    }
    str = str + head(p)+ "]";
    return str;
}   

let anotherList = listIota(1,10);
console.log(listDisp(anotherList));



function listLength(l){
    if (isEmpty(l))
        return 0;
    return 1 + listLength(tail(l));
}

function listAbsRec(l){
    if (isEmpty(l))
        return nil;
    if (head(l)<0){
        l['car']= -head(l);
        return listAbsRec(tail((l)));
    }
}
let l = listIota(-4,4);
console.log(listDisp(l));
listAbsRec(l);
console.log(listDisp(l));



function listAppend(l1,l2){
    if(isEmpty(l1))
        return l2;
    return cons(head(l1),listAppend(tail(l1),l2));
}
/*
let l1 = listIota(1,4);
console.log(l1);
let l2 = listIota(7,10);
console.log(l2);
let l3 = listAppend(l1,l2);
console.log(l3);
console.log(listDisp(l3));
*/

function listRotateLeft(l){
    return listAppend(tail(l),cons(head(l),nil));
}

/*
console.log(cons(1,cons(2,cons(3,nil))));
let list = listIota(1,5);
console.log(list);
let list2 = listRotateLeft(list);
console.log(listDisp(list));
console.log(list2);
console.log(listDisp(list2));
*/
function withoutTail(l){
    p = l;
    q = {};
    while(tail(p)!=nil){
        q = cons(head(p),q);
        p = tail(p);
    }
    return q;
}
let a = listIota(1,5);
console.log(listDisp(a));
console.log(listDisp(withoutTail(a)))

/*

function listRotateRight(l){
    return 
}*/