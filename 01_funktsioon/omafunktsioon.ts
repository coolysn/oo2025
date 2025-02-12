//Vabalangemine - ühtlaselt muutuv liikumine, mille käigus keha kõrgus muutub.
//Valem: s= v0*t + gt²/2
function vabalangemine(aeg:number, algkiirus:number=0): number {
    const g:number = 9.81; //Vabalangemise kiirendus, konstant (m/s²)
    return algkiirus * aeg + 0.5 * g * aeg * aeg;
}

//Kui keha kukub 2 sekundit, algkiirus 0 m/s
console.log(vabalangemine(2)); 
//Kui keha kukub 3 sekundit algkiirusega 5 m/s
console.log(vabalangemine(3, 5)); 