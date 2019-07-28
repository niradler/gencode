const Getcode = require("./GetCode");
const options = {};
const getCode = new Getcode(options);

try {
  //generate 1000 unique codes
  const codes = getCode.generate(1000);
  console.log(codes);
} catch (error) {
  console.log({ error });
}
