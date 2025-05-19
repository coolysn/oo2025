class Auto {
  //Isendimuutuja
  värv: string;

  //Staatiline muutuja
  static koguarv: number = 0;

  constructor(värv: string) {
    this.värv = värv; //isendimeetod
    Auto.koguarv++; //static
  }

  //Isendimeetod (kuulub konkreetsele autole)
  kirjelda(): void {
    console.log(`See auto on ${this.värv}.`);
  }

  //Staatiline meetod (kuulub klassile)
  static mituAutot(): void {
    console.log(`Autosid kokku: ${Auto.koguarv}`);
  }
}

const auto1 = new Auto("punane");
const auto2 = new Auto("sinine");

//Isendimeetodi kasutamine
auto1.kirjelda();
auto2.kirjelda(); 

//Staatilise meetodi kasutamine
Auto.mituAutot();
