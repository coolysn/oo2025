//Loo käsk kontrollimaks, kas parameetrina antud pinge on vastava takisti puhul lubatud - st. kas pingestamisel eralduv võimsus jääb lubatud maksimuvõimsuse piiresse

class Resistor {
    r: number = 0;
    maxP: number = 0;
    constructor(r: number, maxP: number) {
      this.r = r; this.maxP=maxP;
    }
    getCurrent(u: number): number {
      return u / this.r;
    }
    getPower(u: number): number {
      return u * this.getCurrent(u);
    }
    isVoltageAllowed(u:number):boolean{
        return this.getPower(u)<=this.maxP;
    }
  }
  
//Koosta takistitest massiiv. Koosta funktsioon, mis loob uue massiivi takistitest, mille lubatud võimsus jääb etteantud pinge korral lubatud piiresse.
  let r1 = new Resistor(220, 0.25);
  let r2: Resistor = new Resistor(220, 0.5);
  let r3: Resistor = new Resistor(220, 1.0);
  console.log(r1.getPower(10));
  console.log(r1.isVoltageAllowed(12));
  let rs:Resistor[]=[r1,r2,r3];
  let v1:Resistor[]=[];
  for(let r of rs){
    if(r.isVoltageAllowed(10)){v1.push(r)}
  }
  console.log(v1)
  //Teine variant
  console.log(rs.filter(r => r.isVoltageAllowed(10)));




