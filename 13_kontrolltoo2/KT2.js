//Tekstide sarnasus 
var Tekst = /** @class */ (function () {
    function Tekst(sisu) {
        this.sisu = sisu;
    }
    Tekst.prototype.sumbolOsakaal = function (sumbol) {
        if (!sumbol || sumbol.length !== 1 || !sumbol.match(/[^\s]/))
            return 0;
        var normalized = this.sisu.toLowerCase();
        var otsitav = sumbol.toLowerCase();
        var loendur = 0;
        for (var i = 0; i < normalized.length; i++) {
            if (normalized[i] === otsitav) {
                loendur++;
            }
        }
        return normalized.length > 0 ? Math.round((loendur / normalized.length) * 100) / 100 : 0;
    };
    Tekst.prototype.osakaaludeSumma = function (teine, tahed) {
        var summa = 0;
        for (var i = 0; i < tahed.length; i++) {
            var t = tahed[i];
            var osakaal1 = this.sumbolOsakaal(t);
            var osakaal2 = teine.sumbolOsakaal(t);
            summa += Math.abs(osakaal1 - osakaal2);
        }
        return Math.round(summa * 100) / 100;
    };
    return Tekst;
}());
var Tekstihaldur = /** @class */ (function () {
    function Tekstihaldur() {
        this.tekstid = [];
    }
    Tekstihaldur.prototype.lisaTekst = function (sisu) {
        this.tekstid.push(new Tekst(sisu));
    };
    Tekstihaldur.prototype.sarnasuseJarjestus = function (vordlus, tahed) {
        return this.tekstid
            .filter(function (t) { return t !== vordlus; }) //välistab võrdlusteksti
            .map(function (t) { return ({
            tekst: t,
            vahe: vordlus.osakaaludeSumma(t, tahed)
        }); })
            .sort(function (a, b) { return a.vahe - b.vahe; }); // järjekorra määramine
    };
    return Tekstihaldur;
}());
var tekst1 = new Tekst("banana banana");
var tekst2 = new Tekst("aabbe");
var tahed = "ae";
// Arvutame ja logime
var vahe = tekst1.osakaaludeSumma(tekst2, tahed);
console.log(vahe);
