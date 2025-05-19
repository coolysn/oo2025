"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lausetekst = exports.Sonatekst = exports.Tekst = void 0;
var Tekst = /** @class */ (function () {
    function Tekst() {
    }
    //mitukorda täht esineb sisus
    Tekst.prototype.loendaTaht = function (taht) {
        var sisu = this.kysiSisu();
        var loend = 0;
        for (var i = 0; i < sisu.length; i++) {
            if (sisu[i] === taht) {
                loend++;
            }
        }
        return loend;
    };
    return Tekst;
}());
exports.Tekst = Tekst;
//uus versioon Sona klassist
var Sonatekst = /** @class */ (function (_super) {
    __extends(Sonatekst, _super);
    function Sonatekst(sisu) {
        var _this = _super.call(this) || this;
        _this.sisu = sisu;
        return _this;
    }
    Sonatekst.prototype.kysiSisu = function () {
        return this.sisu;
    };
    return Sonatekst;
}(Tekst));
exports.Sonatekst = Sonatekst;
// Lause tekstina
var Lausetekst = /** @class */ (function (_super) {
    __extends(Lausetekst, _super);
    function Lausetekst(lause) {
        var _this = _super.call(this) || this;
        var sonaMap = new Map();
        var sonaTekstid = lause.trim().split(/\s+/);
        _this.sonaObjektid = sonaTekstid.map(function (tekst) {
            if (!sonaMap.has(tekst)) {
                sonaMap.set(tekst, new Sonatekst(tekst));
            }
            return sonaMap.get(tekst);
        });
        return _this;
    } //Kui lauses on sõna mitu korda, nt "tere tulemast tere"
    // siis "tere" ei looda kaks korda, vaid jagatakse sama objekti.
    //.map(...) käib läbi kõik sõnad lauses ja tagastab iga sõna jaoks vastava Sonatekst objekti
    // kui olemas, võtab olemasoleva, muidu loob uue.
    Lausetekst.prototype.kysiSisu = function () {
        return this.sonaObjektid.map(function (s) { return s.kysiSisu(); }).join(" ");
    };
    return Lausetekst;
}(Tekst));
exports.Lausetekst = Lausetekst;
