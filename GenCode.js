const fs = require("fs");

const file = fs.readFileSync("./words.txt", "utf-8");
const words = file.split("\n");
const wordsCount = words.length - 1;

class GenCode {
  constructor(options = {}, existsCallback) {
    this.setOptions(options, existsCallback);
  }

  setOptions(options = {}, existsCallback) {
    this.maxRetry = options.maxRetry || 100000;
    this.wordsCount = options.wordsCount || 1;
    this.sep = options.sep || "_";
    this.retry = 0;

    if (typeof existsCallback == "function") {
      this.existsCallback = existsCallback;
    }
  }

  getRandomWord() {
    return words[Math.floor(Math.random() * wordsCount)];
  }

  getRandomCode() {
    return new Array(this.wordsCount)
      .fill(0)
      .map(() => this.getRandomWord())
      .join(this.sep);
  }

  generate(count = 1) {
    if (count > this.maxRetry) {
      throw new Error(`maximum codes count is ${this.maxRetry}.`);
    }

    let codes = new Set();

    while (codes.size < count) {
      const code = this.getRandomCode();
      const size = codes.size;
      codes.add(code);

      if (size == codes.size) {
        this.retry++;
      }

      if (this.retry >= this.maxRetry) {
        throw new Error(`maximum retry reach. (${codes.size})`);
      }
    }

    this.retry = 0;
    codes = [...codes];

    return count == 1 ? codes[0] : codes;
  }
}

module.exports = GenCode;
