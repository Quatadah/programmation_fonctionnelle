////////// Exercice  1  //////////
 
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


function hidden_cypher(str) {
    const key = 13;
    return [
        cypher(str,key),cypher(str,-key),str
    ];
}

console.log(hidden_cypher("xuyhq"));

