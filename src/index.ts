import { Verhoeff } from "./verhoeff";

export function isValidAadhaar(aadhaarString: string): boolean {
  aadhaarString = aadhaarString.replace(/[\s-]+/g, "");
  return (
    /^[2-9]\d{11}$/.test(aadhaarString) && Verhoeff.validate(aadhaarString)
  );
}
