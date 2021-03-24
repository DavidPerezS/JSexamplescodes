/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
class Calculator {
  // constructor(num) {
  //   this.num = num;
  // }

  add(num) {
    if (parseInt(num) < 0) {
      throw new Error('Negatives not allowed: ' + num);
    }
    if (num === '' || num == null) {
      return 0;
    }
    if (num.slice(0, 2) == '//') {
      console.log('string length: ' + num.length);
      const delimiter = RegExp(num[2], 'g');
      num = num.replace(delimiter, ',');
      num = num.slice(4, num.length);
    }
    if (num.search(/[,\n\s]/) > -1) {
      //main action
      num = num.split(/[,\n\s]/); // /,|\n|\s/ is also viable
      for (let i = 0; i < num.length; i++) {
        if (num[i] >= 1000) {
          num[i] = 0;
        }
      }
      return num.reduce((acum, current) => parseInt(acum) + parseInt(current));
    }
    return parseInt(num);
  }
}

module.exports = Calculator;
