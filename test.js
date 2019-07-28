const GenCode = require("./GenCode");
let codes = [];

const genCode = new GenCode({});

try {
  //generate 100000 unique codes
  codes = genCode.generate(100000);
  console.log("length");
  console.log(codes.length);
  console.log([...new Set(codes)].length);
  console.log(codes[0]);
} catch (error) {
  console.log({ error });
}
