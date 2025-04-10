"use strict";
function kehamassiindeks(cm, kg) {
    let m = cm / 100;
    return kg / (m * m);
}
console.log(kehamassiindeks(181, 110));
let massid = [80, 90, 100, 110, 115];
for (let mass of massid) {
    console.log(kehamassiindeks(181, mass));
}
let indeksid = massid.map(mass => kehamassiindeks(181, mass));
console.log(indeksid);
//Luua teine valem kehamassiindeksi arvutamiseks:
//1,3 korda kehakaal jagatud pikkusega astmes 2,5
// aitab käsklus Math.pow
function kehamassiindeks2(cm, kg) {
    let m = cm / 100;
    return (1.3 * kg / Math.pow(m, 2.5));
}
//Arvuta kehamassiindeks mitmesuguste massidega sama pikkuse juures
//näita, kuidas väärtused erinevad
let indeksid2 = massid.map(mass => kehamassiindeks2(181, mass));
console.log(indeksid2);
//Arvuta mõlema valemiga sama massi ja eri pikkuste juures
let vastus = [];
for (let pikkus = 150; pikkus < 190; pikkus += 2) {
    vastus.push([pikkus, kehamassiindeks(pikkus, 90), kehamassiindeks2(pikkus, 90)]);
}
console.log(vastus);
