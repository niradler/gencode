const GenCode = require("./GenCode");
let codes = [];
const genCode = new GenCode({}, code => {
  return codes.includes(code);
});

try {
  console.time(1);
  for (let i = 0; i < 100000; i++) {
    const code = genCode.generate();
    codes.push(code);
  }
  console.timeEnd(1);
} catch (error) {
  console.log({ error });
}
