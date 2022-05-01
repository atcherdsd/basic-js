const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(boolean = true) {
    this.type = boolean;
  }

  encrypt(message, key) {
    if (!message || !key) 
      throw new Error('Incorrect arguments!');
      
    let cipStr = '';
    let correctStr = message.toUpperCase();
    key = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();

    for (let i = 0, k = 0; i < correctStr.length; i++, k++) {
      if (correctStr[i].charCodeAt() == 32) k--;
      
      if (correctStr[i].charCodeAt() < 65 || correctStr[i].charCodeAt() > 90)
        cipStr += correctStr[i];
      else {
        let coefficient = correctStr.charCodeAt(i) - 65;
        let stepRelativeStrChar = key.charCodeAt(k) - 65;
        cipStr += String.fromCharCode(65 + (coefficient + stepRelativeStrChar) % 26);
      }
    }
    if (this.type) 
      return cipStr;
    return Array.from(cipStr).reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) 
      throw new Error('Incorrect arguments!');

    let cipStr = '';
    let correctStr = message.toUpperCase();
    key = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();

    for (let i = 0, k = 0; i < correctStr.length; i++, k++) {
      if (correctStr[i].charCodeAt() == 32) k--;

      if (correctStr[i].charCodeAt() < 65 || correctStr[i].charCodeAt() > 90) 
        cipStr += correctStr[i];
      else {
        let coefficient = correctStr.charCodeAt(i) - 65;
        let stepRelativeStrChar = key.charCodeAt(k) - 65;
        cipStr += String.fromCharCode(65 + (coefficient - stepRelativeStrChar + 26) % 26);
      }
    }
    if (this.type) 
      return cipStr;
    return Array.from(cipStr).reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
