"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sona = void 0;
var Sona = /** @class */ (function () {
    function Sona(sisu) {
        this.sisu = sisu;
    }
    Sona.prototype.loendaTaht = function (taht) {
        var loend = 0;
        for (var i = 0; i < this.sisu.length; i++) {
            if (this.sisu[i] === taht) {
                loend++;
            }
        }
        return loend;
    };
    return Sona;
}());
exports.Sona = Sona;
