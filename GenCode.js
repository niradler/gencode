const fs = require("fs");

const file = fs.readFileSync("./words.txt", "utf-8");
const words = file.split("\n");
const length = words.length;

class GenCode {
  constructor(options = {}, existsCallback) {
    this.maxRetry = options.maxRetry || 10;
    this.sep = options.sep || "_";
    this.retry = 0;

    if (typeof existsCallback == "function") {
      this.existsCallback = existsCallback;
    }
  }

  getRandomWord() {
    return words[Math.floor(Math.random() * length)];
  }

  getRandomCode(wordsCount) {
    return new Array(wordsCount)
      .fill(0)
      .map(() => this.getRandomWord())
      .join(this.sep);
  }

  generate(wordsCount = 1) {
    let code = this.getRandomCode(wordsCount);

    while (this.existsCallback && this.existsCallback(code)) {
      if (this.retry >= this.maxRetry) throw new Error("maximum retry reach.");
      this.retry++;
      code = this.getRandomCode(wordsCount);
    }

    this.retry = 0;

    return code;
  }
}

module.exports = GenCode;
