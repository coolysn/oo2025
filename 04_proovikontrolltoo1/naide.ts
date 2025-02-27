class Hulknurk{
    constructor(protected xd:number[], protected yd: number[]){}
}

let h1:Hulknurk= new Hulknurk([50,30,40], [40,30,50]);
let h2:Hulknurk= new Hulknurk([50,10,40], [20,30,30]);
console.log(h1);
console.log(h2);