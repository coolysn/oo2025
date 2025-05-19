"use strict";
//Libisev keskmine(õpetaja näidis) Esimene punkt
function ak1(a, b, c) {
    return (a + b + c) / 3;
}
//Teine punkt
function ak2(m) {
    return m.reduce((a, b) => a + b) / m.length;
}
function ak3(...args) {
    return ak2(args);
}
console.log(ak1(4, 6, 7));
console.log(ak2([3, 4, 5, 6]));
console.log(ak3(3, 5));
function lk1(m) {
    let v = [];
    for (let nr = 0; nr < m.length - 2; nr++) {
        v.push(ak1(m[nr], m[nr + 1], m[nr + 2]));
    }
    return v;
}
//Veel üks näidis kuidas lahendada (vt. lk1)
function lk2(m) {
    let v = [];
    let pikkus = 3;
    for (let nr = 0; nr < m.length - pikkus + 1; nr++) {
        v.push(ak2(m.slice(nr, nr + pikkus))); //alates numbrist kuni pikkuseni
    }
    return v;
}
console.log(lk1([1, 2, 5, 3, 3]));
console.log(lk2([1, 2, 5, 3, 3]));
