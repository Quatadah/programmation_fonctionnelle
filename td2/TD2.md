# TD2 : Programmation fonctionnelle
## Exercice 1

```Javascript
function cypher (str, offset) {
    let res = "";
    const codeA  = "a".charCodeAt(0); // character code of "a"
    const extent = 26;                // number of letters in alphabet
    const realoffset = ((offset % extent) + extent) % extent;
    for (let i = 0; i < str.length; i++) {
        const code   = str.charCodeAt(i);
        if ((code >= codeA) && (code <= codeA + extent)) {
            const newcode = ((code-codeA+realoffset) % extent) + codeA;
            res += String.fromCharCode(newcode);
        } else {
            res += str[i];
        }
    }
    return res;
}
```

1-
    Les variables définies sont : 
    res, codeA,extent,realoffset,i,code,newCode 
    res,codeA,extent,realoffset : portée globale sur toute la fonction
    code,i : locale à la boucle for
    newCode: locale a statement <strong>if</strong>

2-
    let déclare une variable qui peut être modifiée plus tard dans le programme.
    const déclare une variable qui est constante et ne peut pas être changée.
    Pour la sécurité.

```Javascript
function hidden_cypher(str) {
    const key = 13;
    return [
        cypher(str,key),cypher(str,-key),str
    ];
}

console.log(hidden_cypher("xuyhq"));
```

3-
    La portée de key est globale dans tout le programme, elle ne sera pas utilisée dans d'autres programmes
    alors qu'elle aura accès à ces programmes.


## Exercice 2

```Javascript
function pgcd(a,b){
    if(a===0)
        return b;
    else if (b===0)
        return a;
    else{
        return pgcd(b,a%b);
    }
}
```
## Exercice 3

1 - sum(x,y) = sum(x+1,y) + x

2 -
```Javascript
function sum(x,y){
    if(x==y)
        return x;
    if (x>y)
        return 0;
    return x + sum(x+1,y);
}
``` 
3-
```Javascript
function sumSquares(x,y)
{
    if(x==y)
        return x*x;
    else if (x>y)
        return 0;
    else
        return x*x + sumSquares(x+1,y);
}
```

4-
```Javascript
function sumGeneric(f,x,y)
{
    if (x==y)
        return f(x);
    else if (x>y)
        return 0;
    else
        return f(k) + sumGeneric(f,x+1,y);
}
```

## Exercice 4

1-
```javascript
function powerLinear(x,n){
    if (n==0)
        return 1;
    return x * powerLinear(x,n-1);
}
```
```javascript
function powerLogarithmic(x,n){
    if (n==0)
        return 1;
    else if(n==1)
        return x;
    else if(n%2 == 0){
        return powerLogarithmic(x*x,n/2);
    }
    return x*powerLogarithmic(x*x,((n-1)/2));
}
```

## Exercice 5
1- 
```javascript
function myOdd(n){
    if(n==0)
        return false;
    return myEven(n-1);
}

function myEven(n){
    if (n==0)
        return true;
    return myOdd(n-1);
}
```

## Exercice 6
```Javascript
function convert(n){
    if(n<=0)
        return '';
    return ''+ convert(n>>1) + (n&1);
}
```
