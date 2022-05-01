const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'}) {

  let addAgregator = new Array(additionRepeatTimes).fill(`${addition}`);
  let fullAddition = addAgregator.join(additionSeparator);
  
  let strAgregator = new Array(repeatTimes).fill(str + fullAddition);
  let fullStr = strAgregator.join(separator);
  
  return fullStr; 
}

module.exports = {
  repeater
};
