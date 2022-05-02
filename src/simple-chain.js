const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push('( ' + value + ' )');
    return this;
  },

  removeLink(position) {
    if ((typeof(position) != 'number') || (!this.chain[position - 1]) || position < 0) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let presentation = this.chain;
    this.chain = [];
    return presentation.join('~~');
  }
};

module.exports = {
  chainMaker
};
