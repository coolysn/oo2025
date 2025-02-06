class vektor{
    constructor(protected x:number, protected y:number){}
    kuva():void{
        console.log(this.x, this.y);
    }
    pikkus():number{
        return Math.sqrt(this.x*this.x + this.y*this.y)
    }
    liida(teine:vektor):vektor{
        return new vektor(this.x+teine.x, this.y+teine.y);
    }
    //loo käsklus vektori korrutamiseks arvuga (kahega)
    korruta(koef: number):vektor{
        return new vektor(this.x*koef, this.y*koef);
    }
    suurendaX():void{
        this.x+=1;
    }
    //Leia kahe vektori skalaarkorrutis
    skalaarkorrutis(teine:vektor){
        return this.x*teine.x + this.y*teine.y;
    }
}
//Loo massiiv neljast vektorist 
//Leia nende kõigi summa
let vektorid:vektor[]=[
    new vektor(1, 3),
    new vektor(1, 5),
    new vektor(3, 3),
    new vektor(2, 1),
];
let koht= vektorid[0];
for(let i=1; i<vektorid.length; i++){
    koht = koht.liida(vektorid[i]);
}
koht.kuva();


let v1:vektor= new vektor(3, 5);
let vagun:vektor= new vektor(9, -4);
let energia:number= v1.skalaarkorrutis(vagun);
console.log(energia)
v1.suurendaX();
v1.kuva();
v1.kuva();
console.log(v1.pikkus());
let v3:vektor= v1.liida(new vektor(1, 2));
v3.kuva();
v1.korruta(4).kuva();
