# getcode

getcode is a package to generate friendly codes, from english words dictionary includes a set of 466327 words.

## usage

```
npm i -S getcode
```

```
const Getcode = require("getcode");
const options = {};
const getCode = new Getcode(options);

//generate 1000 unique codes
const codes = getCode.generate(1000);
console.log(codes)
```
