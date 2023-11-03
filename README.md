# Aadhaar Validator

[![NPM Version](https://img.shields.io/npm/v/aadhaar-validator-ts.svg)](https://www.npmjs.com/package/aadhaar-validator-ts)
[![Node.js Version](https://img.shields.io/node/v/aadhaar-validator-ts.svg)](https://nodejs.org/)

The `aadhaar-validator-ts` npm package provides a utility for validating Aadhaar numbers, the 12-digit unique identification numbers issued by the Indian government. Use this package to ensure the correctness and authenticity of Aadhaar numbers, enhancing the accuracy of data entry and verification processes in your applications and services.

## Features

- Validate the format and length of Aadhaar numbers.
- Check if an Aadhaar number is mathematically valid by verifying its checksum using the Verhoeff algorithm.
- Lightweight and efficient, suitable for server-side and client-side applications.

## Verhoeff Algorithm

This package uses the Verhoeff algorithm, a checksum formula that detects any single-digit error and many common errors in data entry. The algorithm is named after its creator, Dutch mathematician Jacobus Verhoeff.

## Installation

You can install the `aadhaar-validator-ts` package via npm:

```bash
npm install aadhaar-validator-ts
```

## Usage

```javascript
const { isValidAadhaar } = require('aadhaar-validator-ts');

// or

import { isValidAadhaar } from "aadhaar-validator-ts";

const aadhaarNumber = '1234 5678 9012'; // Replace with the Aadhaar number to validate
const isValid = isValidAadhaar(aadhaarNumber);

if (isValid) {
  console.log('Aadhaar number is valid.');
} else {
  console.error('Aadhaar number is not valid.');
}

```
The isValidAadhaar function now takes care of removing spaces and dashes in the Aadhaar number before validation.