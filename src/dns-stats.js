const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let arr = [];
    
  let wirkedDomains = domains.map((item) => item.split('.').reverse().map((item) => '.' + item));

  for (let i = 0; i < wirkedDomains.length; i++) {
    let str = '';
    for (let j = 0; j < wirkedDomains[i].length; j++) {
      str += wirkedDomains[i][j];
      arr.push(str);
    }
  }
  arr.map((item) => result[item] = (result[item] || 0) + 1);
  return result;
}

module.exports = {
  getDNSStats
};
