"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lause = void 0;
var Sona_1 = require("./Sona");
//Lauses tähe esinemissageduse loendamisel liidetakse kokku vastava tähe esinemissagedused lause sõnades.
var Lause = /** @class */ (function () {
    function Lause(tekst) {
        var sonaTekstid = tekst.trim().split(/\s+/); //Trim eemaldab tühikud
        this.sonad = sonaTekstid.map(function (s) { return new Sona_1.Sona(s); }); //Map iga saadud s jaoks uus  Sona Objekt
    }
    Lause.prototype.loendaTaht = function (taht) {
        var kokku = 0;
        for (var _i = 0, _a = this.sonad; _i < _a.length; _i++) {
            var sona = _a[_i];
            kokku += sona.loendaTaht(taht);
        }
        return kokku;
    };
    return Lause;
}());
exports.Lause = Lause;
