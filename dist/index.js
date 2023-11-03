"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verhoeff_1 = require("./verhoeff");
function isValidAadhaar(aadhaarString) {
    aadhaarString = aadhaarString.replace(/[\s-]+/g, "");
    return (/^[2-9]\d{11}$/.test(aadhaarString) && verhoeff_1.Verhoeff.validate(aadhaarString));
}
